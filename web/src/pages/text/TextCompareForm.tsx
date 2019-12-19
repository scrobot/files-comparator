import React from "react";
import "../../ui_component/app/App.css"
import {Nothing} from "../../models/Nothing";

type FormData = {
    onFormSubmit: (t: { sourceText: string, targetText: string }) => void;
}

class TextCompareForm extends React.Component<FormData, Nothing> {
    private readonly sourceText: React.RefObject<HTMLTextAreaElement>;
    private readonly targetText: React.RefObject<HTMLTextAreaElement>;

    constructor(props: FormData) {
        super(props);
        this.sourceText = React.createRef();
        this.targetText = React.createRef();
    }

    render() {
        let handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const source = (this.sourceText.current as any as HTMLInputElement).value;
            const target = (this.targetText.current as any as HTMLInputElement).value;

            console.log({source: source, target: target})

            this.props.onFormSubmit({ sourceText: source, targetText: target });
        };

        return (
            <form className="home-form" onSubmit={handleSubmit}>
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                        <label className="label">First text</label>
                        <textarea className="form-control" ref={this.sourceText}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="label">Second text</label>
                        <textarea className="form-control" ref={this.targetText}/>
                    </div>
                </div>
                <div className="home-button-container">
                    <button type="submit" className="btn btn-primary home-button">Find difference</button>
                </div>
            </form>
        );
    }
}

export default TextCompareForm;