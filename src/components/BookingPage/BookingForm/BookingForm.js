import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const BookingForm = ({placeName}) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit =(data, e) => {
        e.preventDefault();
        if(data.fromDate < data.toDate){
            history.push(`/destination/${placeName}`);
        }
    }
    return (
        <>
            <div className="border rounded p-2">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="from" placeholder="From" defaultValue="Dhaka" className="form-control form-control-lg font-weight-bold" />
                        {errors.from && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="to" placeholder="To" defaultValue={placeName} className="form-control form-control-lg font-weight-bold" />
                        {errors.to && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control form-control-lg" name="fromDate" placeholder="Your Age" type="date" />
                            {errors.fromDate && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control form-control-lg" name="toDate" placeholder="Your Age" type="date" />
                            {errors.toDate && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BookingForm;