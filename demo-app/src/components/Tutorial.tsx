import React, { ChangeEvent, Component } from "react";
import ApiService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

interface Props {
  id: string;
}

interface State {
  currentTutorial: ITutorialData;
  message: string;
}

class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTutorial: {
        id: "",
        title: "",
        description: "",
        // published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.id !== this.props.id) {
      this.getTutorial();
    }
  }

  onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        title: title,
      },
    }));
  };

  onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  };

  getTutorial() {
    const { id } = this.props;

    if (id) {
      ApiService.getTutorialById(id)
        .then((response: ITutorialData) => {
          this.setState({
            currentTutorial: response,
          });
          console.log(response);
        })
        .catch((error) => {
          console.error(`Error fetching tutorial with ID ${id}:`, error);
        });
    } else {
      console.log("No ID parameter provided");
    }
  }

  updatePublished(status: boolean) {
    const { currentTutorial } = this.state;

    const updatedTutorial: ITutorialData = {
      ...currentTutorial
      // published: status,
    };

    ApiService.updateTutorial(currentTutorial.id, updatedTutorial)
      .then(() => {
        this.setState({
          currentTutorial: updatedTutorial,
          message: "The status was updated successfully!",
        });
      })
      .catch((error) => {
        console.error(`Error updating tutorial with ID ${currentTutorial.id}:`, error);
      });
  }

  updateTutorial() {
    const { currentTutorial } = this.state;

    ApiService.updateTutorial(currentTutorial.id, currentTutorial)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((error) => {
        console.error(`Error updating tutorial with ID ${currentTutorial.id}:`, error);
      });
  }

  deleteTutorial() {
    const { currentTutorial } = this.state;

    ApiService.deleteTutorial(currentTutorial.id)
      .then(() => {
        // Handle successful deletion, e.g., redirect or update state
      })
      .catch((error) => {
        console.error(`Error deleting tutorial with ID ${currentTutorial.id}:`, error);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            {/* Your existing component code */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Tutorial;
