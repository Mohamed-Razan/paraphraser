import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { Message, Cancel } from '@material-ui/icons';
import axios from 'axios';

class SubmitButton extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { loading: false }

    async handleSubmit() {
        this.setState({ loading: true })
        const body = { inputText: this.props.inputText }

        const response = await axios({
            method: 'POST',
            url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
                'x-rapidapi-key': '9a383e506emsh2c00b043098c3e2p119569jsnfa6e9908236d'
            },
            data: {
                language: 'id',
                strength: 3,
                text: body.inputText
              }
        })

        this.setState({ loading: false })
        this.props.responseText(response.data.rewrite)
    }

    render() {
        const { loading } = this.state;
        return (
            <div style={{textAlign: "center"}}>
                {
                    loading ?
                        <CircularProgress color="primary" />
                        : 
                        <div>
                            <Button onClick={this.handleSubmit} disabled={loading} variant="contained" style={{ backgroundColor: "#007FFF", color: "white", fontFamily: "'Noto Sans', sans-serif", marginRight: "2%" }}>{<Message />} &nbsp; Paraphrase</Button>
                            <Button onClick={() => window.location.reload(true)} disabled={loading} variant="contained" style={{ backgroundColor: "#ff0f0f", color: "white", fontFamily: "'Noto Sans', sans-serif", marginLeft: "2%" }}>{<Cancel />} &nbsp; Cancel</Button>
                        </div>
                }
            </div>

        );
    }
}

export default SubmitButton;