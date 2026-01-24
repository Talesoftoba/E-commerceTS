

type Props = {};

export const Footer =({}:Props)=>{
    return(
        <footer className="bg-gray-200 text-gray-600 py-6 mt-auto">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                &copy; {new Date().getFullYear()} MyStore. All rights reserved.

            </div>

        </footer>

    );

};

