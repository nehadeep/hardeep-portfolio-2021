

import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import React from "react";
import {useRouter} from "next/router";
import {Card, Button} from "react-bootstrap";
import BaseLayout from "@/layouts/BaseLayout";


const InstructorDashboard =  () => {
    const router = useRouter();
    const instructorId = router.query.id || '';

    return (
        <BaseLayout>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-title">Instructor Portfolios- {instructorId}</h1>
                         <Card>
                             <Card.Header>Featured</Card.Header>
                             <Card.Body>
                                 <Card.Title>Portfolio Title</Card.Title>
                                 <Card.Text>
                                     just some tect
                                 </Card.Text>
                                 <Button varient="primary">Go somether</Button>
                             </Card.Body>
                         </Card>

                    </div>
                </div>
            </div>
        </BaseLayout>
    );

}

export default withApollo(withAuth(InstructorDashboard, ['admin', 'instructor']));
