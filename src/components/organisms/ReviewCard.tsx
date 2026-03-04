interface Review {
    project: string;
    body: string;
}

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="flex flex-col rounded-3xl p-5 min-h-50 bg-gray600/50 border border-gray100/10 whitespace-pre-wrap leading-[1.4]">
            <p className="text-main">{review.project}</p>
            <div className="flex flex-1 text-white justify-center items-center">
                {review.body}
            </div>
        </div>
    );
}
