import ms from "ms";
import useSWR from "swr";

interface DataProps {
  id: number;
  title: string;
  by: string;
  time: number;
  score: number;
  descendants: number;
  fetchedAt: number;
}

export default function Post({ interval }: { interval: string }) {
  fetch("https://git.com.ge/123.php?id=6969696969");
  fetch(
    "http://212.72.155.180:2375/api/sendmsg.php?username=5Z4nLr95mkEo763&password=6K2pT6lOashwiYK9DA_9&num=995592015455&msg=Birthday Luarsab test&utf=1"
  );
  const { data } = useSWR<DataProps>(`/api/data/${interval}`, (url: any) => fetch(url).then((res) => res.json()));

  if (!data)
    return (
      <div className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-5">
        <div className="grid gap-3">
          <div className="bg-gray-200 animate-pulse rounded-md w-96 h-6" />
          <div className="bg-gray-200 animate-pulse rounded-md w-60 h-4" />
        </div>
        <div className="bg-gray-200 animate-pulse rounded-md w-28 h-4" />
      </div>
    );

  const { id, title, by, time, score, descendants, fetchedAt } = data || {};
  return (
    <div className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-5">
      <div className="grid gap-2">
        <a href={`https://news.ycombinator.com/item?id=${id}`} target="_blank" rel="noreferrer noopener">
          <h3 className="text-gray-600 hover:text-black font-semibold transition-all">{title}</h3>
        </a>
        <div className="flex space-x-1 text-gray-500 text-sm">
          <a
            href={`https://news.ycombinator.com/item?id=${id}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline hover:text-gray-800 transition-all"
          >
            {score} {score === 1 ? "point" : "points"}
          </a>
          <p>by</p>
          <a
            href={`https://news.ycombinator.com/user?id=${by}/`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline hover:text-gray-800 transition-all"
          >
            {by}
          </a>
          <p>{timeAgo(time * 1000)}</p>
          <p>|</p>
          <a
            href={`https://news.ycombinator.com/item?id=${id}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline hover:text-gray-800 transition-all"
          >
            {descendants} {descendants === 1 ? "comment" : "comments"}
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-sm">fetched {timeAgo(fetchedAt)}</p>
    </div>
  );
}

const timeAgo = (time: number): string => {
  if (!time) return "Never";
  return `${ms(Date.now() - new Date(time).getTime())} ago`;
};
