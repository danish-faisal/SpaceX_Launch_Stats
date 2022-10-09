import classNames from "classnames";

function LaunchItem({ launch }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch.launch_success,
                "text-danger": !launch.launch_success,
              })}
            >
              {launch.mission_name}
            </span>
          </h4>
          <p>Date: {launch.launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
}

export default LaunchItem;
