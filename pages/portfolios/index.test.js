import { MockedProvider } from '@apollo/client/testing';
import {GET_PORTFOLIOS} from "../../apollo/queries";
import Portfolios from "./index";
import React from "react";
import renderer from "react-test-renderer";
import {mount} from "enzyme";
import {act} from "react-dom/test-utils";
import wait from "waait";
import PortfolioCard from "../../components/portfolios/PortfolioCard";
// The component AND the query need to be exported

const portfolioMock = {
    request: {
        query: GET_PORTFOLIOS,
    },
    result: {
        data: {
            portfolios:  {
                "_id": "600e4b4f1c237b053908fb23",
                "title": "Job in Update Promise",
                "company": {
                    "name": "Update Promise",
                    "city": "Chino",
                    "state": "California",
                    "country": "USA",
                    "website": "https://www.updatepromise.com/",
                    "__typename": "company"
                },
                "jobTitle": "Senior Front End Web Developer",
                "description": "Update Promise was developed with one simple idea in mind, positively impact millions of auto industry consumer lives.Update promise provides the digital platform to automobile industry to better serve their clients needs and businesses.",
                "jobResponsibilities": "Handling the update promise web application with the new technologies (Angular 4+ and React) to provide better user experience to our clients .\nWorking closely with variety of backends (Python, Node, PHP) to consume the APIs written in REST and GRAPHQL\nResponsible for the scalability and performance of the growing application with the increasing feature demands of clients.\nEnsuring the responsiveness of the application throughout all the devices especially with BOOTSTRAP.\nHandling some public widgets of the application to make some feature available to public and ensuring the vulnerability and security of applications .\nExtensively handling  the appointment scheduler tool.\nUtilizing some real time data in the application with NODE SOCKET.\n",
                "startDate": "1527577200000",
                "endDate": null,
                "techStack": [
                    {
                        "label": "React",
                        "value": "React",
                    },
                    {
                        "label": "Redux",
                        "value": "Redux",
                    },
                    {
                        "label": "React-Hooks",
                        "value": "React-Hooks",
                    },
                    {
                        "label": "Angular 9+",
                        "value": "Angular 9+",
                    }
                ],
            },
        },
    },
};

it('should render portfolios', async () => {

let wrapper;
await act(async ()=>{
    wrapper = mount(
        <MockedProvider mocks={[portfolioMock]} addTypename={false}>
        <Portfolios/>
    </MockedProvider>
        )
});
    await act(()=>wait(0)); // wait for response

    wrapper.update();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(".card-title")).toHaveText(
        "title: Job in Update Promise"
    )

});

it("should click on a link to open respective portfolio card", async ()=> {
    const wrapper = mount(<Portfolios/>);
    const linkButton = wrapper.root.findByType(".card-link");
    linkButton.props.onClick();

    const tree = wrapper.toJSON();
    expect(tree.children).toContain(<PortfolioCard/>)
});