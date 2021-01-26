import BaseLayout from "@/layouts/BaseLayout";
import React from "react";

const Cv = () => (
    <BaseLayout>
        <div className="row mt-4">
            <div className="col-md-10 offset-md-1">
                <iframe src="/Hardeep_Kaur_Resume2021.pdf" style={{width:'100%', height:'800px'}}>

                </iframe>
            </div>
        </div>
    </BaseLayout>
);

export default Cv;