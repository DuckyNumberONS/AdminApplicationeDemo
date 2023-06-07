interface CategoryItem {
    idCategory: number;
    genreTitle: string;
    colorGenre: string;
}
const CategoryItem: React.FC<{ item: CategoryItem }> = ({ item }) => {
    return (
        <div key={item.idCategory} className="mr-2">
            <span className="px-2 py-1 text-sm font-medium rounded-full capitalize text-white" style={{ backgroundColor: item.colorGenre }}>
                {item.genreTitle}
            </span>
        </div>
    );
};
export default CategoryItem;
