import Image from 'next/image';
import {
  formatDateToLocal,
  formatCurrency,
  formatTimeToLocal,
} from '@/app/lib/utils';
import { readResults } from '@/app/lib/data';
import { DeleteResult } from '../invoices/buttons';

export default async function ResultsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const results = await readResults(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {results?.map((result) => (
              <div
                key={result.resultID}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{result.resultID}</p>
                    </div>
                    <p className="text-sm text-gray-500">{result.reporter}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {<p className="text-xl font-medium">test</p>}
                    <p>{formatDateToLocal(result.createdAt)}</p>
                  </div>
                  {/* <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Result Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Reporter
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Test Run Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {/* Status */}
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  {/* <span className="sr-only">Edit</span> */}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {results?.map((result) => (
                <tr
                  key={result.resultID}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox"></input>
                      {/* <Image
                        src={result.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${result.name}'s profile picture`}
                      /> */}
                      <p>{result.resultID}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {result.reporter}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {result.testRunName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(result.createdAt)}{' '}
                    {formatTimeToLocal(result.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={result.status} /> */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {
                        // <DeleteResult id={result.resultID}></DeleteResult>
                      }
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
