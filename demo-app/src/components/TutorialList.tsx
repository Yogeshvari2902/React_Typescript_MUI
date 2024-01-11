import React, { ChangeEvent, Component } from "react";
import ApiService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = {
  tutorials: Array<ITutorialData>,
  currentTutorial: ITutorialData | null,
  currentIndex: number,
  searchTitle: string
};

class TutorialList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchTitle: e.target.value
    });
  }

  async retrieveTutorials() {
    try {
      const tutorials = await ApiService.getAllTutorials();
      this.setState({
        tutorials: tutorials,
      });
    } catch (error) {
      console.error("Error retrieving tutorials:", error);
    }
  }

  refreshList = async () => {
    try {
      await ApiService.deleteAllTutorials();
      this.retrieveTutorials();
      this.setState({
        currentTutorial: null,
        currentIndex: -1
      });
    } catch (error) {
      console.error("Error deleting all tutorials:", error);
    }
  }

  setActiveTutorial = (tutorial: ITutorialData, index: number) => {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  searchTitle = async () => {
    try {
      const tutorials = await ApiService.findByTitle(this.state.searchTitle);
      this.setState({
        tutorials: tutorials,
      });
    } catch (error) {
      console.error("Error searching tutorials by title:", error);
    }
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        {/* ... existing code ... */}
        <div className="col-md-6">
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
              {/* <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div> */}
              {/* ... existing code ... */}
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TutorialList;
