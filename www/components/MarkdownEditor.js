import React, { createRef } from 'react'
import styled from 'styled-components'
import createReactClass from 'create-react-class'
import { EditorState, basicSetup } from "@codemirror/basic-setup"
import { EditorView, ViewPlugin, keymap } from '@codemirror/view'
import { defaultTabBinding } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'

const _CMEditor = styled.div`

  & > .cm-editor {
    outline: none;
    height: 300px;

    & > .cm-scroller > .cm-content {
      white-space: pre-wrap;
    }
  }
`

const MarkdownEditor = createReactClass({
    containerRef: createRef(),
    componentDidMount() {
        const extensions = [
            basicSetup,
            keymap.of([defaultTabBinding]),
            markdown(),
        ]

        if (typeof this.props.onChange === 'function') {
            extensions.push(ViewPlugin.define((view) => {
                return {
                    update: (_update) => {
                        this.props.onChange(_update.state.doc)
                    },
                }
            }))
        }

        new EditorView({
            state: EditorState.create({ extensions, }),
            parent: this.containerRef.current,
        })
    },
    render() {
        return (
            <_CMEditor ref={this.containerRef}/>
        )
    }
})

export default MarkdownEditor