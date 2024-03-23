
interface GifGridItem {
    title: string;
    url: string
}
export const GifGridItem: React.FC<GifGridItem> = ({title, url}) => {
  return (
        <div className="card">
            <img src={url} alt="title" />
            <p>{title}</p>
        </div>
    )
}
