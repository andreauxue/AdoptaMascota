export default function BookCard({ title, author, coverUrl, description, level, rating, pages, buyUrl }) {
  return (
    <article className="flex gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <img
        src={coverUrl}
        alt={`Portada de ${title}`}
        className="h-36 w-28 flex-shrink-0 rounded-lg object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="mb-1">
          <h3 className="truncate text-lg font-bold text-stone-900">{title}</h3>
          <p className="text-sm text-stone-600">{author}</p>
        </header>
        {level && (
          <span className="mb-2 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            {level}
          </span>
        )}
        <p className="line-clamp-3 text-sm text-stone-700">{description}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm text-stone-600">
          <div className="flex items-center gap-3">
            {typeof rating === 'number' && (
              <span className="inline-flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span>{rating.toFixed(0)}/5</span>
              </span>
            )}
            {pages && <span>{pages} págs.</span>}
          </div>
          {buyUrl && (
            <a
              href={buyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


