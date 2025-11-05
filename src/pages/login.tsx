export const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-linear-to-l from-[#1D1D1D] to-100% to-[#333]'>
            <div>
                <h2 className='md:text-5xl text-2xl font-bold text-center mb-5 md:tracking-widest'>
                    Login
                </h2>
                <form className='bg-[#313131] p-5 md:p-10 rounded-lg inset-shadow-[0px_1px_20px_0] inset-shadow-white/3 md:space-y-6 space-y-4'>
                    <label className='flex flex-col md:flex-row md:gap-5 justify-center items-center md:text-lg text-base'>
                        Username:
                        <input
                            name='username'
                            type='text'
                            min={3}
                            minLength={3}
                            max={15}
                            maxLength={15}
                            className='input bg-[#414141]'
                            placeholder='admin'
                        />
                    </label>
                    <label className='flex flex-col md:flex-row md:gap-5 justify-center items-center md:text-lg text-base relative'>
                        Password:
                        <input
                            name='password'
                            type='password'
                            min={3}
                            minLength={3}
                            max={15}
                            maxLength={15}
                            className='input bg-[#414141]'
                            placeholder='password'
                        />
                        <span className='absolute right-3 top-1/2 -translate-y-1/2 text-sm cursor-pointer'>
                            Show
                        </span>
                    </label>
                    <button className='button'>Submit</button>
                </form>
            </div>
        </div>
    );
};
