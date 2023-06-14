import Pagination from "react-js-pagination";

function PaginationComponent(props) {
    return (
        props.total > 0 && (
            <Pagination 
                innerClass          = {`flex justify-${props.position} mb-0`}
                activePage          = {props.currentPage}
                itemsCountPerPage   = {props.perPage}
                totalItemsCount     = {props.total}
                onChange            = {props.onChange}
                itemClass           = "page-item"
                linkClass           = "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
            />
        )
    )
}

export default PaginationComponent;