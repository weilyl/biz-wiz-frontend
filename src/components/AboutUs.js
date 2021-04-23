import React, { Component } from "react";

export default class AboutUs extends Component{
    render(){
        return(
        <div>
            <h2>About the Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        {/* Put profile Pic here */}
                        <div class="container">
                            <h2>Weily</h2>
                            <p class="title">Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        {/* Put profile Pic here */}
                        <div class="container">
                            <h2>Moises</h2>
                            <p class="title">Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        {/* Put profile Pic here */}
                        <div class="container">
                            <h2>Davi</h2>
                            <p class="title">Project Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        {/* Put profile Pic here */}
                        <div class="container">
                            <h2>Ian</h2>
                            <p class="title">Scrum Master</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
// export default function AboutUs() {
//     return (
//       <div>
        
//       </div>
//     );
//   }