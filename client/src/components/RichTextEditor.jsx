import React, { useState, useCallback } from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

import { FontSize } from "../extensions/FontSizeExtension";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { convertToJSX, setLink } from "../config/config";
import ColorPickerButton from "./ColorPickerButton";

// Icons
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaIndent,
  FaOutdent,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaLink,
  FaLinkSlash,
} from "react-icons/fa6";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";

const MenuBar = ({ editor }) => {
  /* const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    let url = window.prompt("URL", previousUrl);
    // cancelled
    if (url === null) {
      return;
    }
    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }
    // Check if the URL starts with "http://" or "https://"
    if (!/^https?:\/\//i.test(url)) {
      // If not, prepend "https://"
      url = "https://" + url;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]); */

  if (!editor) {
    return null;
  }

  return (
    <div className="p-1 w-full flex flex-wrap ">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </button>

      <button
        onClick={() => setLink(editor)}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <FaLink />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <FaLinkSlash />
      </button>

      {/* <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FaIndent />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FaOutdent />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}

      <ColorPickerButton editor={editor} />
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

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = ``;

export default function RichTextEditor() {
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      FontSize,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
      document.getElementById("campo-di-prova").innerHTML = editorContent;
    },
  });

  const handleSubmit = (e, editor) => {
    e.preventDefault();
    if (editorContent === "<p></p>") {
      console.log("vuoto");
      document.getElementById("campo-di-prova").innerHTML = "";
    } else {
      console.log(convertToJSX(editorContent));
    }
  };

  return (
    <form
      className="w-full h-full p-2 border-[1px] border-solid rounded-xl"
      onSubmit={(e) => handleSubmit(e, editor)}
    >
      <MenuBar editor={editor} />
      <div className="min-h-[150px] border-[1px] border-solid rounded-md">
        <EditorContent editor={editor} />
      </div>
      <button
        onClick={(e) => handleSubmit(e, editor)}
        className="bg-black text-white font-bold my-2 px-5 py-1 text-lg"
      >
        SAVE
      </button>
    </form>
  );
}
