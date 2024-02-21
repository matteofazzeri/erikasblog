import React, { useState, useCallback } from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import FontFamily from "@tiptap/extension-font-family";

import { FontSize } from "../../../extensions/FontSizeExtension";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { convertToJSX, setLink } from "../../../config/config";
import ColorPickerButton from "./ColorPickerButton";

// Icons
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaLink,
  FaLinkSlash,
} from "react-icons/fa6";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import FontFamilySelector from "./FontFamilySelector";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="py-2 px-1 w-full flex flex-wrap ">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <FaUnderline />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          setLink(editor);
        }}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <FaLink />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().unsetLink().run();
        }}
        disabled={!editor.isActive("link")}
      >
        <FaLinkSlash />
      </button>

      <ColorPickerButton editor={editor} />
      <FontFamilySelector editor={editor} />
      <select
        className="rounded-md border-solid border-[1px] m-[2px]"
        onChange={(e) => {
          const fontSize = parseInt(e.target.value);
          editor.commands.setFontSize(fontSize);
        }}
        value={
          editor.isActive("fontSize")
            ? editor.getAttributes("fontSize").toString()
            : ""
        }
      >
        <option value="">Font size</option>
        {Array.from({ length: 100 }, (_, index) => index + 1).map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <FaUndoAlt />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <FaRedoAlt />
      </button>
    </div>
  );
};

const content = ``;

export default function RichTextEditor({ content, setDescription }) {
  const [editorContent, setEditorContent] = useState(content || "");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Color.configure({
        /* types: [TextStyle.name, ListItem.name], */
        defaultColor: "#000000",
      }),
      TextStyle.configure({ types: [ListItem.name] }),
      FontSize,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      FontFamily.configure({
        types: ["textStyle"],
      }),
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
      setDescription(editor.getHTML());
    },
  });

  return (
    <div className="w-full h-fit border-[1px] border-solid rounded-xl">
      <div>
        <MenuBar editor={editor} />
      </div>
      <div className="w-full min-h-[150px] border-t-[1px] border-solid ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
