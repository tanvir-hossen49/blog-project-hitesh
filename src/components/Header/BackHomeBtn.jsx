const BackHomeBtn = () => {
    const handleNavigate = () => {
        history.back();
    }
    
    return location.pathname !== '/' && location.pathname !== '/dashboard/my-posts' && (
        <div onClick={handleNavigate}>
            <button aria-label="Blog home" data-title="Blog home" 
            title="back to blog" 
            className="flex flex-row items-center rounded-full p-3 transition duration-100 ease-in-out hover:bg-black/10">
                <svg className="h-4 w-4 fill-current pr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"><path d="M7.75135 16.7197L0.885098 9.55347C0.683348 9.31347 0.600098 9.08847 0.600098 8.89722C0.600098 8.70597 0.68331 8.44834 0.850898 8.27509L7.71715 1.10884C8.06035 0.749066 8.6299 0.737366 8.9884 1.08189C9.34933 1.42408 9.36107 1.99576 9.01535 2.35351L2.7466 8.89722L9.0466 15.4747C9.39231 15.831 9.38057 16.404 9.01965 16.7463C8.6626 17.091 8.0926 17.0797 7.75135 16.7197Z"></path></svg>
            </button>
        </div>
    );
};

export default BackHomeBtn;