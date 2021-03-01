import React from "react";
import Header from "../Header/Header";
import ResultContainer from "../Results/Results";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name=require('@rstacruz/startup-name-generator');
//functional comp function which returns some html
//class base comp is class comp build using js
// function App(){
//     return <h1>it is my functional based comp</h1>
// }

//extends - inheritance oops concept (inheriting react.component)
//as it is class so cant return directly so render method is used\

//object is just key-value pair
class App extends React.Component {
  state = {
    HeaderText: "Title It!",
    headerExpanded:true,
    suggestNames:[],//an array to store the suggested names
  };


  handleInputChange=(inputText)=>{
    // alert('I am called');
    // console.log('input - ', inputText);
    // this.setState({headerExpanded:inputText.length>0?false:true});
    name(inputText);
    // this.setState({headerExpanded:!(inputText.length>0)});
    this.setState({headerExpanded:!inputText,
      suggestNames:inputText?name(inputText):[],
    
    });
    
  
  };

  //this.state.headertext ->this correspond to class in which state obj is present  which contain headertext.
  //<SearchBox onInputChange={this.state.alert} />
  //
  render() {
    console.log(name('cloud'));
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded}  headTitle={this.state.HeaderText} />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestNames={this.state.suggestNames} />
      </div>
    );
  }
}

export default App;
