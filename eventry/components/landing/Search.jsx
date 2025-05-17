'use client'
import useDebounce from '@/app/hooks/useDebounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
  // to receive existing searchParams/Query (if any)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  // serach box e kichu likhle e ei function e call hobe. Se URl er last e query ta add korbe.
  const doSearch = useDebounce((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  function handleSearch(term) {
    doSearch(term);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search an Event"
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;
