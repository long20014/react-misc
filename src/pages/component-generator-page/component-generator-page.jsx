import React from 'react';
import './component-generator-page.scss';
import SettingArea from './setting-area/setting-area';
import DisplayArea from './display-area/display-area';
import CodeArea from './code-area/code-area';

export default class ComponentGeneratorPage extends React.Component {  
  render() {   
    return (      
      <div className="page-wrapper">
        <SettingArea />
        <DisplayArea />
        <CodeArea />
      </div>      
    );
  }  
}
