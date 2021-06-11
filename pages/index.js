//  import 'semantic-ui-css/semantic.min.css';
import React ,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.js';
import  Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component
{
    static async getInitialProps()
    {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return {campaigns};
    }

    renderCampaigns()
    {
        const items = this.props.campaigns.map( address => 
            {
                return{
                    header : address,
                    description : (
                        <Link route={`/campaigns/${address}`}>
                            <a>View campaigns</a>
                        </Link>
                    ),
                    fluid : true
                };

        });
        return <Card.Group items= {items} />;
    }
    render()
    {
        return (
        <Layout>
        <div>
        <link
           rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        /> 
            
        <h3>Open campaigns</h3>
        
        <Link route="/campaigns/new"> 
        <a>
        <Button
            floated="right"
            content = "Create campaign"
            icon = "add circle"
            primary
        />
        </a>
        </Link>
               {this.renderCampaigns()}
        </div> 
        </Layout>
        );
    }
}


export default CampaignIndex;