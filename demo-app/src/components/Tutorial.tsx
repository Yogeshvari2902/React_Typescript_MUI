import { Component, ChangeEvent } from "react";

import TutorialDataService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

interface Props {
  id: string;
}

interface State {
  currentTutorial: ITutorialData;
  message: string;
}

export default class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTutorial: {
        id: "",
        title: "",
        description: "",
        published: false,
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
      TutorialDataService.get(id)
        .then((response: any) => {
          this.setState({
            currentTutorial: response.data,
          });
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } else {
      console.log("No ID parameter provided");
      // Handle the case when no ID parameter is provided in the route
    }
  }



 updatePublished(status: boolean) {
  const { currentTutorial } = this.state;


  const data: ITutorialData = {
    id: currentTutorial.id,
    title: currentTutorial.title,
    description: currentTutorial.description,
    published: status,
  };


  TutorialDataService.update(data, currentTutorial.id)
    .then((response: any) => {
      this.setState(prevState => ({
        currentTutorial: {
          ...prevState.currentTutorial,
          published: status,
        },
        message: "The status was updated successfully!",
      }));
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}


updateTutorial() {
  const { currentTutorial } = this.state;


  TutorialDataService.update(
    currentTutorial,
    currentTutorial.id
  )
    .then((response: any) => {
      console.log(response.data);
      this.setState({
        message: "The tutorial was updated successfully!",
      });
    })
    .catch((e: Error) => {
      console.log(e);
    });
}


deleteTutorial() {
  const { currentTutorial } = this.state;


  TutorialDataService.delete(currentTutorial.id)
    .then((response: any) => {
      console.log(response.data);
      // Redirect to the tutorials page or handle as needed
    })
    .catch((e: Error) => {
      console.log(e);
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
