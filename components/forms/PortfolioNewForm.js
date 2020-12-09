import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {useEffect, useState} from "react";

const PortfolioNewForm = ({onSubmit, initialData={}, create})=>{

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const{ register, handleSubmit, setValue} = useForm({defaultValues: initialData});

    useEffect(()=>{
        register({name: 'startDate'});
        register({name: 'endDate'})
    }, [register]);

    useEffect(()=>{ //initial data for start date and end data
        if(initialData.startDate){
            setStartDate(new Date(+initialData.startDate));
        }

        if(initialData.endDate){
            setEndDate(new Date(+initialData.endDate));
        }
    }, [initialData]);

    const handleDateChange = (dateType, setDate) => date=>{
        setValue(dateType, date?new Date(date.setHours(0, 0, 0 ,0)).toISOString():date);
        setDate(date);
    };


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    ref={register}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="name">Company Name</label>
                <input
                    ref={register}
                    name="company.name"
                    type="text"
                    className="form-control"
                    id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="city">Company City</label>
                <input
                    ref={register}
                    name="company.city"
                    type="text"
                    className="form-control"
                    id="city"/>
            </div>
            <div className="form-group">
                <label htmlFor="state">Company State</label>
                <input
                    ref={register}
                    name="company.state"
                    type="text"
                    className="form-control"
                    id="state"/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Company Country</label>
                <input
                    ref={register}
                    name="company.country"
                    type="text"
                    className="form-control"
                    id="country"/>
            </div>
            <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                    ref={register}
                    name="jobTitle"
                    type="text"
                    className="form-control"
                    id="jobTitle"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    ref={register}
                    name="description"
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
               </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <div>
                <DatePicker showYearDropdown selected={startDate}
                    onChange = {handleDateChange('startDate', setStartDate)}
                    name="startDate"
                    className="form-control"
                    id="startDate"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <div>
                <DatePicker showYearDropdown selected={endDate} disabled={!endDate}
                    onChange = {handleDateChange('endDate', setEndDate)}
                    name="endDate"
                    className="form-control"
                    id="endDate"/>
                </div>
            </div>

            <div className="form-group">
                {
                    endDate &&
                    <button type="button" className="btn btn-danger" onClick={()=>handleDateChange('endDate', setEndDate)(null)}>No End Date</button>
                }
                {
                    !endDate &&
                    <button type="button" className="btn btn-success" onClick={()=>handleDateChange('endDate', setEndDate)(new Date())}>Set End Date</button>

                }
            </div>

            <button
                type="submit"
                className="btn btn-primary">
                {
                    create && 'Create'
                }
                {
                    !create && 'Update'
                }
            </button>
        </form>
    )
};

export default PortfolioNewForm;