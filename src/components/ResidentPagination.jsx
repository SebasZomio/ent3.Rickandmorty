import React from 'react';
import ResidentCard from './ResidentCard';

function ResidentPagination({ residents, currentPage, setCurrentPage }) {
    const itemsPerPage = 8;
    const totalPages = Math.ceil(residents.length / itemsPerPage);
    const visibleResidents = residents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

const nextPage = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
    }
};

const prevPage = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
};

return (
    <div className="resident-pagination">
        <div>
            <button onClick={prevPage} disabled={currentPage === 1}>
                Anterior
            </button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
                Siguiente
            </button>
        </div>
        <div className="resident-card-container">
            {visibleResidents.map((url) => (
            <ResidentCard key={url} url={url} />
            ))}
        </div>
    </div>
    );
}

export default ResidentPagination;
