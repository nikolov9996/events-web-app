import { ErrorMessage } from '@hookform/error-message';
import Button from 'app/components/Button';
import Input from 'app/components/Input';
import { useAppDispatch } from 'app/hooks';
import { useForm } from "react-hook-form";
import { addUserEvent } from '../Home/homeSlice';

const Index = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: "",
            location: "",
            image: "",
            date: "",
            time: ""
        }
    });

    const submitForm = handleSubmit((data) => {
        console.log(data)
        dispatch(addUserEvent({ ...data, id: new Date().getTime().toString() }))
        reset();
    })

    return (
        <form className=" m-auto max-w-4xl self-center" onSubmit={(data) => submitForm(data)}>
            <div className='flex flex-wrap justify-between mt-20'>
                <Input label="Event Name" re={register("name", { required: "Event Name is required" })} />

                <Input label="Location" re={register("location", { required: "Location is required" })} ref={null} />


                <Input label="Date" min={new Date().toISOString().split('T')[0]} type="date" re={register("date", { required: "Date is required" })} ref={null} />
                <Input label="Time" type="time" re={register("time", { required: "Time is required" })} ref={null} />


                {/* <p>{(errors.name?.message)}</p> */}
            </div>
            <Input label="image URL" type="url" re={register("image", { required: "image URL is required" })} ref={null} />
            <div className='flex h-12 justify-end mb-12 mr-2'>
                <Button label="Create" type='submit' />
            </div>
            <ErrorMessage className='text-red-600 font-bold' name='name' errors={errors} as="p" />
            <ErrorMessage className='text-red-600 font-bold' name='location' errors={errors} as="p" />
            <ErrorMessage className='text-red-600 font-bold' name='date' errors={errors} as="p" />
            <ErrorMessage className='text-red-600 font-bold' name='time' errors={errors} as="p" />
            <ErrorMessage className='text-red-600 font-bold' name='image' errors={errors} as="p" />


        </form>
    );
}

export default Index