import React, { ChangeEvent, Component } from "react";
import ApiService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

type Props = {};

type State = ITutorialData & {
  submitted: boolean;
};

class AddTutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: "",
      // published: false,
      submitted: false
    };
  }

  onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value,
    });
  };

  onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      description: e.target.value,
    });
  };

  saveTutorial() {
    const data: ITutorialData = {
      title: this.state.title,
      description: this.state.description,
    };

    ApiService.createTutorial(data)
      .then((response: ITutorialData) => {
        this.setState({
          id: response.id,
          title: response.title,
          description: response.description,
          // published: response.published,
          submitted: true,
        });
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating tutorial:", error);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: ""
      // published: false,
      // submitted: false,
    });
  }

  render() {
    const { submitted, title, description } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            {/* <button className="btn btn-success" onClick={() => this.newTutorial()}>
              Add
            </button> */}
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={(e) => this.onChangeTitle(e)}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={(e) => this.onChangeDescription(e)}
                name="description"
              />
            </div>

            <button onClick={() => this.saveTutorial()} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddTutorial;
