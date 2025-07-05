import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CalculateIcon from "@mui/icons-material/Calculate";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const TableColumn = () => {
  return (
    <div>
      <table className="w-[1440px] border border-gray-300 text-sm text-left">
        {/* Actual column headers */}
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm">
            <th className="border px-2 py-2 text-center">#</th>

            <th className="border px-2 py-2">
              <div className="flex items-center gap-x-1">
                <HomeRepairServiceIcon fontSize="small" />
                <span>Job Request</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2">
              <div className="flex items-center gap-x-1">
                <CalculateIcon fontSize="small" />
                <span>Submitted</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2">
              <div className="flex items-center gap-x-1">
                <ExpandCircleDownIcon fontSize="small" />
                <span>Status</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2">
              <div className="flex items-center gap-x-1">
                <PersonIcon fontSize="small" />
                <span>Submitter</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2">
              <div className="flex items-center gap-x-1">
                <LanguageIcon fontSize="small" />
                <span>URL</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2 bg-green-100">
              <div className="flex items-center gap-x-1">
                <EmojiEmotionsIcon fontSize="small" />
                <span>Assigned</span>
                <KeyboardArrowDownIcon fontSize="small" className="ml-auto" />
              </div>
            </th>

            <th className="border px-2 py-2 text-center bg-purple-200">
              Priority
            </th>
            <th className="border px-2 py-2 text-center bg-purple-200">
              Due Date
            </th>
            <th className="border px-2 py-2 text-center bg-orange-200">
              Est. Value
            </th>
            <th className="border px-2 py-2 text-center"></th>
          </tr>
        </thead>

        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">
              Launch social media campaign for product
            </td>
            <td className="border px-4 py-2">20-10-2024</td>
            <td className="border px-4 py-2 text-yellow-600">
              <span className="bg-amber-100 rounded-full px-1.5 font-semibold">
                In-process
              </span>
            </td>
            <td className="border px-4 py-2">Alisha Patel</td>
            <td className="border px-4 py-2">
              <a href="" className="text-blue-600">
                www.aishaPatel....
              </a>
            </td>
            <td className="border px-1 py-2">Sophie Choudhury</td>
            <td className="border px-4 py-2 text-yellow-500">Medium</td>
            <td className="border px-4 py-2">20-11-2024</td>
            <td className="border px-4 py-2">6,200,000 ₹</td>
            <td className="border px-12 py-2"></td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">
              Update press kit for company redesign
            </td>
            <td className="border px-4 py-2">15-10-2024</td>
            <td className="border px-4 py-2 text-gray-600">
              {" "}
              <span className="bg-blue-200 flex rounded-full px-2 text-center font-semibold">
                Need To Start
              </span>
            </td>
            <td className="border px-4 py-2">Irfan Khan</td>
            <td className="border px-4 py-2">
              <a href="" className="text-blue-600">
                www.irfanKhanP....
              </a>
            </td>
            <td className="border px-4 py-2">Tejas Pandey</td>
            <td className="border px-4 py-2 text-red-600">High</td>
            <td className="border px-4 py-2">30-10-2024</td>
            <td className="border px-4 py-2">3,500,000 ₹</td>
            <td className="border px-4 py-2"></td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">
              Finalize user testing feedback for app
            </td>
            <td className="border px-4 py-2">05-12-2024</td>
            <td className="border px-4 py-2 text-yellow-600">
              {" "}
              <span className="bg-amber-100 rounded-full px-1.5 font-semibold">
                In-process
              </span>
            </td>
            <td className="border px-4 py-2">Mark Johnson</td>
            <td className="border px-4 py-2">
              <a href="" className="text-blue-600">
                www.markJohns....
              </a>
            </td>
            <td className="border px-4 py-2">Rachel Lee</td>
            <td className="border px-4 py-2 text-yellow-500">Medium</td>
            <td className="border px-4 py-2">10-12-2024</td>
            <td className="border px-4 py-2">4,750,000 ₹</td>
            <td className="border px-4 py-2"></td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">
              Design new features for the website
            </td>
            <td className="border px-4 py-2">10-01-2025</td>
            <td className="border px-4 py-2 text-green-600">
              {" "}
              <span className="bg-green-200 rounded-full px-1.5 font-semibold">
                complete
              </span>
            </td>
            <td className="border px-4 py-2">Emily Green</td>
            <td className="border px-4 py-2">
              <a href="" className="text-blue-600">
                www.emilyGreen....
              </a>
            </td>
            <td className="border px-4 py-2">Tom Wright</td>
            <td className="border px-4 py-2 text-blue-500">Low</td>
            <td className="border px-4 py-2">10-01-2025</td>
            <td className="border px-4 py-2">5,900,000 ₹</td>
            <td className="border px-4 py-2"></td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">
              Prepare financial report for Q4
            </td>
            <td className="border px-4 py-2">25-01-2025</td>
            <td className="border px-4 py-2 text-red-600">
              {" "}
              <span className="bg-red-200 rounded-full px-1.5 font-semibold">
                Blocked
              </span>
            </td>
            <td className="border px-4 py-2">Jessica Brown</td>
            <td className="border px-4 py-2">
              <a href="" className="text-blue-600">
                www.jessiCabro....
              </a>
            </td>
            <td className="border px-4 py-2">Kevin Smith</td>
            <td className="border px-4 py-2 text-gray-600">Low</td>
            <td className="border px-4 py-2">30-01-2025</td>
            <td className="border px-4 py-2">2,800,000 ₹</td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">6</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">7</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">8</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">9</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">10</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">11</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>

          <tr>
            <td className="border px-4 py-2">12</td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border h-[35px]"></td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
        <tr>
          <td className="border px-4 py-2">13</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">14</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">15</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">16</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">17</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">18</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">19</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">20</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">21</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">22</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">23</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">24</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>

        <tr>
          <td className="border px-4 py-2">25</td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border h-[35px]"></td>
          <td className="border px-4 py-2"></td>
        </tr>
      </table>
    </div>
  );
};

export default TableColumn;
