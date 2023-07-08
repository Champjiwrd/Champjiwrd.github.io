import React, { Component } from 'react';

export let longdo;
export let map;

export class LongdoMap extends Component {
  constructor(props) {
    super(props);
    this.mapCallback = this.mapCallback.bind(this);
  }

  mapCallback() {
    longdo = window.longdo;
    map = new window.longdo.Map({
      placeholder: document.getElementById(this.props.id),
      language: 'en',
    });
    map.Ui.Toolbar.visible(false);
    map.Ui.Zoombar.visible(false);
    map.Ui.LayerSelector.visible(false);
    map.Ui.Fullscreen.visible(false);
    map.Ui.DPad.visible(false);
    map.Ui.Geolocation.visible(false);
    map.zoomRange({ min: 5, max: 16 });
  }

  componentDidMount() {
    const existingScript = document.getElementById('longdoMapScript');
    const callback = this.props.callback;

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://api.longdo.com/map/?key=${this.props.mapKey}`;
      script.id = 'longdoMapScript';
      document.body.appendChild(script);

      script.onload = () => {
        this.mapCallback();
        if (callback) callback();
      };
    }

    if (existingScript) this.mapCallback();
    if (existingScript && callback) callback();
  }

  render() {
    return (
      <div id={this.props.id} style={{ width: '100%', height: '100%' }}></div>
    );
  }
}
