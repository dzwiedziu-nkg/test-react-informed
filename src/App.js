import React, {Component} from 'react';
import {Form, Text, RadioGroup, Radio} from 'informed';
import './App.css';

function SubFormXML(props) {
  return (
    <React.Fragment>
      <label htmlFor="ss1">XML setting 1:</label>
      <Text field="xml1" id="ss1"/>

      <br/>

      <label htmlFor="ss2">XML setting 2:</label>
      <Text field="xml2" id="ss2"/>
    </React.Fragment>
  )
}

function SubFormJSON(props) {
  return (
    <React.Fragment>
      <label htmlFor="ss1">JSON setting 1:</label>
      <Text field="json1" id="ss1"/>
    </React.Fragment>

  )
}

function SubFormCSV(props) {
  return (
    <React.Fragment>
      <label htmlFor="ss1">CSV setting 1:</label>
      <Text field="csv1" id="ss1"/>

      <br/>

      <label htmlFor="ss2">CSV setting 2:</label>
      <Text field="csv2" id="ss2"/>

      <br/>

      <label htmlFor="ss3">CSV setting 2:</label>
      <Text field="csv3" id="ss3"/>
    </React.Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form id="dynamic-field-form" initialValues={{'format': 'json'}}>
          {({formState}) => (
            <React.Fragment>
              <label htmlFor="gs1">Global setting 1:</label>
              <Text field="gs1" id="gs1"/>

              <br/>

              <label htmlFor="gs1">Global setting 2:</label>
              <Text field="gs2" id="gs2"/>

              <br/>
              <br/>

              <label>Choice format: </label>

              <br/>

              <RadioGroup field="format">
                <label htmlFor="formatxml">XML</label>
                <Radio value="xml" id="formatxml"/>

                <br/>

                <label htmlFor="formatjson">JSON</label>
                <Radio value="json" id="formatjson"/>

                <br/>

                <label htmlFor="formatcsv">CSV</label>
                <Radio value="csv" id="formatcsv"/>
              </RadioGroup>

              <br/>
              <br/>

              {
                formState.values.format === 'xml' ?
                  <SubFormXML/>
                  : formState.values.format === 'json' ?
                  <SubFormJSON/>
                  :
                  <SubFormCSV/>
              }

              <br/>

              <button type="submit">
                Submit
              </button>
            </React.Fragment>
          )}
        </Form>
        <h1>And buggy:</h1>
        <Form id="bdynamic-field-form" initialValues={{'format': 'json'}}>
          {({formState}) => (
            <React.Fragment>
              <label htmlFor="bgs1">Global setting 1:</label>
              <Text field="gs1" id="bgs1"/>

              <br/>

              <label htmlFor="bgs1">Global setting 2:</label>
              <Text field="gs2" id="bgs2"/>

              <br/>
              <br/>

              <label>Choice format: </label>

              <br/>

              <RadioGroup field="format">
                <label htmlFor="bformatxml">XML</label>
                <Radio value="xml" id="bformatxml"/>

                <br/>

                <label htmlFor="bformatjson">JSON</label>
                <Radio value="json" id="bformatjson"/>

                <br/>

                <label htmlFor="bformatcsv">CSV</label>
                <Radio value="csv" id="bformatcsv"/>
              </RadioGroup>

              <br/>
              <br/>

              {
                formState.values.format === 'xml' ?
                  <React.Fragment>
                    <label htmlFor="bss1">XML setting 1:</label>
                    <Text field="xml1" id="bss1"/>

                    <br/>

                    <label htmlFor="bss2">XML setting 2:</label>
                    <Text field="xml2" id="bss2"/>
                  </React.Fragment>
                  : formState.values.format === 'json' ?
                  <React.Fragment>
                    <label htmlFor="bss1">JSON setting 1:</label>
                    <Text field="json1" id="bss1"/>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <label htmlFor="bss1">CSV setting 1:</label>
                    <Text field="csv1" id="bss1"/>

                    <br/>

                    <label htmlFor="bss2">CSV setting 2:</label>
                    <Text field="csv2" id="bss2"/>

                    <br/>

                    <label htmlFor="bss3">CSV setting 2:</label>
                    <Text field="csv3" id="bss3"/>
                  </React.Fragment>
              }

              <br/>

              <button type="submit">
                Submit
              </button>
            </React.Fragment>
          )}
        </Form>
      </div>
    );
  }
}

export default App;
