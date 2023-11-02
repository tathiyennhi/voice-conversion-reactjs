(this["webpackJsonpvoice-conversion-frontend"]=this["webpackJsonpvoice-conversion-frontend"]||[]).push([[0],{11:function(t,e,a){},17:function(t,e,a){t.exports=a(29)},29:function(t,e,a){"use strict";a.r(e);a(11);var n=a(1),o=a.n(n),c=a(14),l=a.n(c),i=a(4),u=a(5),s=a(16),r=a(15),d=a(7),m=(a(24),a(31)),b=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).changeTab=function(t){n.setState({activeTab:t})},n.start=function(){n.setState({recordState:d.a.START})},n.pause=function(){n.setState({recordState:d.a.PAUSE})},n.stop=function(){n.setState({recordState:d.a.STOP})},n.onStop=function(t){n.setState({audioData:t}),console.log("onStop: audio data",t)},n.handleFileUpload=function(t){var e=t.target.files[0],a={url:URL.createObjectURL(e),blob:e};n.setState({audioDataRef:a})},n.handleFileUploadSrc=function(t){var e=t.target.files[0],a={url:URL.createObjectURL(e),blob:e};n.setState({audioData:a})},n.handleUpload=function(){var t=n.state,e=t.audioData,a=t.audioDataRef;if(e&&a){var o=new FormData;o.append("src_wav",e.blob),o.append("ref_wav",a.blob),m.a.post("http://127.0.0.1:5000/process_audio",o).then((function(t){console.log("Upload successful",t.data)})).catch((function(t){console.error("Upload failed",t)}))}else console.log("Please record and upload a reference file.")},n.state={activeTab:"1",recordState:null,audioData:null,audioDataRef:null},n}return Object(u.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.recordState,n=e.activeTab;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Voice Conversion App"),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",{className:"tabs"},o.a.createElement("button",{onClick:function(){return t.changeTab("1")},className:"tab-button ".concat("src"===n?"active":""," custom-button tab-button")},"Recording Voice"),o.a.createElement("button",{onClick:function(){return t.changeTab("2")},className:"tab-button ".concat("ref"===n?"active":""," custom-button tab-button")},"File Voice")),"1"===n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h5",null,"Src Voice"),o.a.createElement(d.b,{state:a,onStop:this.onStop,backgroundColor:"rgb(255,255,255)"}),o.a.createElement("audio",{id:"audio",controls:!0,src:this.state.audioData?this.state.audioData.url:null}),o.a.createElement("div",{style:{margin:"20px"},className:"control-buttons"},o.a.createElement("button",{id:"record",onClick:this.start,className:"custom-button start-button"},"B\u1eaft \u0111\u1ea7u"),o.a.createElement("button",{id:"pause",onClick:this.pause,className:"custom-button pause-button"},"T\u1ea1m d\u1eebng"),o.a.createElement("button",{id:"stop",onClick:this.stop,className:"custom-button stop-button"},"D\u1eebng")),o.a.createElement("div",null,o.a.createElement("h5",null,"Ref Voice"),o.a.createElement("input",{type:"file",accept:"audio/wav",onChange:this.handleFileUpload,classname:"custom-file-input"})),o.a.createElement("button",{id:"submit",onClick:this.handleUpload,className:"custom-button submit-button"},"G\u1eedi"))),"2"===n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h5",null,"Src Voice"),o.a.createElement("input",{type:"file",accept:"audio/wav",onChange:this.handleFileUploadSrc,classname:"custom-file-input"})),o.a.createElement("div",null,o.a.createElement("h5",null,"Ref Voice"),o.a.createElement("input",{type:"file",accept:"audio/wav",onChange:this.handleFileUpload,classname:"custom-file-input"})),o.a.createElement("button",{id:"submit",onClick:this.handleUpload,className:"custom-button submit-button"},"G\u1eedi")))))}}]),a}(o.a.Component);l.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dec3578d.chunk.js.map