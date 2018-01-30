import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className='ad' style={{position: 'absolute',bottom: 0, width: '100%'}}>
        <ins className="adsbygoogle"
             style={{display:'block'}}
             data-ad-client="ca-pub-1148832766170857"
             data-ad-slot="5142427923"
             data-ad-format="auto"/>
      </div>
    );
  }
}

