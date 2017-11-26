import * as React from "react";

export const AboutCmp = (props:any) =>{
        return(
                <div className="col-sm-11">       
                    <div className="alert alert-info">
                        What is Lorem Ipsum?&nbsp;<span className="resultLinks"><a  href="https://www.lipsum.com/" target="_blank">click here to know more.</a></span> 
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </p>
                    <div className="myMarginBottom">
                        <h4>Why do we use it&nbsp;:</h4>
                        <ul>
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </li>
                            <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</li>
                            <li>lorem ipsum' will uncover many web sites still in their infancy.</li>
                        </ul>
                    </div>
                </div>
            );
}