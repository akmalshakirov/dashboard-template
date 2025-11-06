import { useState, type ChangeEvent } from "react";

export const Login = () => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            confirm(`Username: ${username} \nPassword: ${password}`);
        } catch (error) {}
        setLoading(false);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-[#222]'>
            <div>
                <h2 className='md:text-5xl text-2xl font-bold text-center mb-5 md:tracking-widest'>
                    Login
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className='bg-[#313131] p-5 md:p-10 rounded-lg inset-shadow-[0px_1px_20px_0] inset-shadow-white/3 md:space-y-6 space-y-4 flex flex-col'>
                    <label className='flex flex-col md:flex-row md:gap-5 justify-center items-center md:text-lg text-base'>
                        Username:
                        <input
                            disabled={loading}
                            name='username'
                            type='text'
                            min={3}
                            minLength={3}
                            max={15}
                            maxLength={15}
                            className='input bg-[#414141] mt-2 disabled:opacity-50 disabled:cursor-not-allowed'
                            placeholder='admin'
                            autoComplete='off'
                            autoFocus
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setUsername(e.target.value)
                            }
                            required
                            aria-required
                        />
                    </label>
                    <label className='flex flex-col md:flex-row md:gap-5 justify-center items-center md:text-lg text-base relative'>
                        Password:
                        <input
                            disabled={loading}
                            name='password'
                            type={showPass ? "text" : "password"}
                            min={3}
                            minLength={3}
                            max={15}
                            maxLength={15}
                            className='input bg-[#414141] mt-2 disabled:opacity-50 disabled:cursor-not-allowed'
                            placeholder='password'
                            autoComplete='off'
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            required
                            aria-required
                        />
                        <button
                            disabled={loading}
                            tabIndex={-1}
                            type='button'
                            className='absolute right-0 md:right-0.5 md:mt-1 rounded-r-lg top-[49%] md:top-1/2 -translate-y-1/10 md:-translate-y-1/2 text-sm cursor-pointer outline-none border-l border-l-gray-600 bg-[#444] h-[57%] md:h-[85.4%] px-3 disabled:opacity-50 disabled:cursor-not-allowed'
                            onClick={() => setShowPass(!showPass)}>
                            {showPass ? "Hide" : "Show"}
                        </button>
                    </label>
                    <button
                        disabled={loading}
                        type={loading ? "button" : "submit"}
                        className={
                            "button border border-gray-500 p-2 rounded-lg not-disabled:active:bg-[#333] not-disabled:active:translate-y-0.5 mt-4 bg-[#444] outline-blue-500 focus:outline-2 outline-0 focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        }>
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};
