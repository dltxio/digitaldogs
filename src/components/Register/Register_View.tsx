import { useState } from 'react'
import DatePicker from "react-datepicker";

type Props = {


};
const Register: React.FC<Props> = props => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="w-full">
            <div className="mt-5 bg-white text-black p-8 rounded-3xl shadow-xl">
                <div className="text-left font-bold text-xl text-primary-p5">
                    Register
                </div>
                <form className="w-full max-w-lg py-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Animal Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Rex"></input>

                        </div>

                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                        <div>

                            <div className="block">
                                <div className="mt-2">
                                    <div>
                                        <label className="align-left">
                                            <input type="radio" className="form-radio" name="radio" value="1" checked />
                                            <span className="ml-2">Male</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="align-left">
                                            <input type="radio" className="form-radio" name="radio" value="2" />
                                            <span className="ml-2">Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div >
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Microchip ID
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="XXXXXXXXXXXX"></input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Dam ID
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="XXXXXXXXXXXX"></input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Sire ID
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="X-00"></input>
                        </div>
                    </div>
                </form >
            </div >
            <div />
        </div >
    );
};
export default Register;
