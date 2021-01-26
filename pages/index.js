import BaseLayout from "../layouts/BaseLayout";
import {TECHSTACK} from "../Models/techStackData";


const Home = () => (
    <BaseLayout page="Home">
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>About Me</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card subtle-shadow no-border">
              <div className="card-body">
                <h5 className="card-title">Senior Front End Full Stack Web Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">A Programmer</h6>
                <div className="card-text fs-2">
                  I'm an experienced and enthusiastic senior Front End Engineer who loves coding and explore my ability more on that. I'm a very passionate programmer who has developed love for programming over the time and love to challenge myself on that and very proud on that.<br/><br/>

                  Here are some of the highlights of my recent work experience :- <br/><br/>

                  <ul>
                    <li>
                      I'm currently working in the automobile industry as a senior Front End Developer where I lead and work on several different projects from meeting with the stakeholders, gathering information, collaborating with the rest of the team, working with the design team , discovery and development and also mentor junior developers. I wear multiple hats.
                    </li>
                    <li>
                      I got an opportunity to work on several different tech stacks in my career span , these days I mostly work on Angular 8+ and React newer versions along with the responsive framework for e.g Bootstrap4, react-material UI and CSS3 flexbox.

                    </li>
                    <li>
                      I have worked with many large organizations like Wells Fargo Bank , ATT and CDW in the past and have exposure to work in larger teams.

                    </li>
                  </ul>


                  I'd also like to share a brief about my projects below:- <br/><br/>

                  As I mentioned above I currently work in an automobile industry platform which constitute many variables of this industry and It includes the <strong> appointment scheduler, customer promises, vehicle check in , multipoint inspection of the vehicles , payments , vehicle services, many more </strong>and connecting all the nodes with each other in a streamline flow and the platform itself has various branches which are written in angular 8+ and react 16+. I have been leveraging all the utilities and features provided by these frameworks and libraries and while I develop them I enjoy it a lot as coding is my passion.
                  <br/>
                  <br/>
                  Thanks <br/>
                  Hardeep Kaur

                </div>
              </div>
              <div className="card-footer no-border">
                <small className="text-muted">
                <div className="tech-skills-container"><label>Tech Skills</label>:-&nbsp;
                  {TECHSTACK.map((val, index)=>{
                    return <span className="tech-skills" key={index}>{val.label}</span>
                  })}

                </div>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Education Qualification</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card subtle-shadow no-border">
              <div className="card-body">
                <h5 className="card-title">BACHELOR OF TECHNOLOGY IN INFORMATION TECHNOLOGY(HONS)</h5>
                <h6 className="card-subtitle mb-2 text-muted">LOVELY PROFESSIONAL UNIVERSITY(INDIA)</h6>
                <p className="card-text fs-2">
                  YEAR OF PASSOUT : 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="section-title">
              <div className="px-2">
                <div className="pt-5 pb-4">
                  <h1>About the App</h1>
                </div>
              </div>
            </section>
            <section className="pb-5">
              <div className="row">
                <div className="col-md-12">
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">Developed and Maintained By Hardeep</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Portfolio Website</h6>
                  <p className="card-text fs-2">
                    This portfolio app is developed using Front End stack in <strong>React.js , Next.js , Bootstrap4 and Backend stack is Node.js and Mongodb.</strong> This app is leveraging the <strong>Apollo server and Apollo Client </strong> to
                    actually manipulate the data flow and client side is highly dependent on caching with the next.js feature.
                    This App is a demonstration of how an application performance can be improved using the caching library paradigms and server side data fetching using next.js.

                  </p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">
                    <a className="external-links" href="https://nextjs.org/docs" target="_blank">Visit Next.js!</a>
                    <a className="external-links" href="https://www.apollographql.com/docs/apollo-server/" target="_blank">Visit Apollo Server!</a>
                    <a className="external-links" href="https://www.apollographql.com/docs/react/" target="_blank">Visit Apollo Server!</a>

                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>*/}


      <div className='reply-controls'>
        <div className="reply-area">
          <div className="reply-to">
            Reply To: <span className="text ml-2">User1</span>
          </div>
          <div className="fj-editor-input">
            <input
              name="title"
              placeholder="Topic title"
              type="text"></input>
          </div>
          <div className="fj-editor">
            <div className="fj-editor-textarea-wrapper">
              <textarea
                name="content"
                placeholder="Type here">
              </textarea>
            </div>
            <div className="fj-editor-preview-wrapper">
              <div className="preview">
                <p></p>
              </div>
            </div>
          </div>
          <div className="submit-area">
            <div className="send mr-auto">
              <button
                href="#"
                className="btn btn-main bg-blue py-2 ttu">Reply</button>
              <a className="btn py-2 ttu gray-10">Cancel</a>
            </div>
            <div>
              <a className="btn py-2 ttu gray-10">hide preview</a>
            </div>
          </div>
        </div>
      </div>
      {/* REPLIER ENDS */}

    </BaseLayout>
  )

  export default Home
