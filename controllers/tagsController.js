

function index(req, res) {
    const response = {
        totalCount: filteredTags.length,
        data: [...filteredTags],
    };
    res.json(response);
}

export { index }