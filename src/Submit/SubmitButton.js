import React, { Component } from 'react';
import { Button, CircularProgress, Box } from '@material-ui/core';
import axios from 'axios';
import config from '../config.json';

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
            <Box flexWrap="wrap" alignItems="center">
                {
                    loading ?
                        <CircularProgress color="primary" />
                        : <Button onClick={this.handleSubmit} disabled={loading} variant="contained" color="primary" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Rewrite</Button>
                }
            </Box>

        );
    }
}

export default SubmitButton;