import React, { Component } from "react";
import ApiService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = {
  tutorials: Array<ITutorialData>,
  currentTutorial: ITutorialData | null,
  currentIndex: number
};

class TutorialList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.showAllTutorials();
  }

  async showAllTutorials() {
    try {
      const tutorials = await ApiService.getAllTutorials();

      if (Array.isArray(tutorials)) {
        this.setState({
          tutorials: tutorials,
        });
      } else {
        console.error("Error: Retrieved data is not an array");
      }
    } catch (error) {
      console.error("Error retrieving tutorials:", error);
    }
  }

  setActiveTutorial = (tutorial: ITutorialData, index: number) => {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Tutorials List</h4>
          <ul className="list-group">
            {tutorials.map((tutorial: ITutorialData, index: number) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
                {/* <button>Delete</button> */}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
            </div>
          ) 
          : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )
          }
        </div> */}
      </div>
    );
  }
}

export default TutorialList;
