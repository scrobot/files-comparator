import React from "react";
import "../css/App.css"
import {Nothing} from "../models/Nothing";

type FormData = {
    onFormSubmit: (t: { sourceFile: FileList, targetFile: FileList }) => void;
}

class FileCompareForm extends React.Component<FormData, Nothing> {
    private readonly sourceText: React.RefObject<HTMLInputElement>;
    private readonly targetText: React.RefObject<HTMLInputElement>;

    constructor(props: FormData) {
        super(props);
        this.sourceText = React.createRef();
        this.targetText = React.createRef();
    }

    render() {
        let handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const source = (this.sourceText.current as any as HTMLInputElement).files;
            const target = (this.targetText.current as any as HTMLInputElement).files;

            console.log({source: source, target: target});

            if(source && target) {
                this.props.onFormSubmit({ sourceFile: source, targetFile: target });
            }
        };

        return (
            <form className="home-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                        <label className="label">First file</label>
                        <input type="file" className="form-control" ref={this.sourceText}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="label">Second file</label>
                        <input type="file" className="form-control" ref={this.targetText}/>
                    </div>
                </div>
                <div className="home-button-container">
                    <button type="submit" className="btn btn-primary home-button">Find difference</button>
                </div>
            </form>
        );
    }
}

export default FileCompareForm;