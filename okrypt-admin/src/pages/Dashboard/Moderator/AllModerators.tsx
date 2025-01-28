import Heading from "../../../components/Heading/Heading";
import LoadingOverlay from "../../../components/LoadingSpinner/LoadingPage";
import { useDisplayError } from "../../../hooks/displayError";
import { useModeratorQuery } from "../../../redux/apis/AuthenticatedApis/Moderator";

const AllModerators = () => {
  const { data, isLoading, error } = useModeratorQuery({});

  useDisplayError(error);

  return (
    <div>
      <Heading whiteText="All" secText="Moderator" />
      <div className="mt-[30px] md:w-[900px] mx-auto w-full">
        {data?.map((moderator: any) => {
          return (
            <div key={moderator?.id}>
              <div className="flex items-center justify-between border-b-border py-[3rem] border-b-[.6px]">
                <div className="flex items-center gap-[1.4rem]">
                  <img
                    src={moderator?.profilePicture}
                    alt="logo"
                    className="w-[30px] h-[35px]"
                  />
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <p className="text-[1.4rem]">{moderator?.userName} </p>
                    </div>
                  </div>
                </div>

                <p className="text-[1.4rem]">{moderator?.email}</p>
              </div>
            </div>
          );
        })}
      </div>

      <LoadingOverlay visible={isLoading} />
    </div>
  );
};

export default AllModerators;
