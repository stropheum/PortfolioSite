import React, {Component} from 'react';

export class Resume extends Component {
    static displayName = Resume.name;

    render() {
        return (
            <>
                {/* Define a CSS variable for the iframe height */}
                <style>
                    {`
            :root {
              --iframe-max-height: calc(100vh - 50px);
            }
          `}
                </style>

                {/* Render the iframe with the CSS variable for height */}
                <iframe
                    src="https://docs.google.com/document/d/e/2PACX-1vRKxJPgzRnxKNCPioitY4qX-nEd4miYswBVFgIWwarRzWpBciqMTMnXK0WyTZcDF7v8Gq_kIeOkfy2M/pub?embedded=true"
                    style={{
                        width: '100%',
                        height: 'var(--iframe-max-height)',
                        border: 'none',
                    }}
                    title="Resume"
                ></iframe>
            </>
        );
    }
}