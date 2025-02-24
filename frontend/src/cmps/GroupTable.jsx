import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { updateBoard } from "../store/actions/board.actions"; // Adjust path as needed

export function GroupTable() {
  const boardToShow = useSelector((state) => state.boardModule.board);
  const dispatch = useDispatch();

  // Flatten tasks for a single droppable area, preserving group info
  const flatTasks = boardToShow.groups.flatMap((group) =>
    group.tasks.map((task) => ({
      ...task,
      groupId: group.id,
      groupTitle: group.title,
    }))
  );

  // Handle drag end: reorder tasks and update group associations
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceIndex = source.index;
    const destIndex = destination.index;

    const tasksCopy = Array.from(flatTasks);
    const [movedTask] = tasksCopy.splice(sourceIndex, 1);
    tasksCopy.splice(destIndex, 0, movedTask);

    // Reconstruct groups based on new task order
    const updatedGroups = boardToShow.groups.map((group) => ({
      ...group,
      tasks: [],
    }));

    tasksCopy.forEach((task, index) => {
      const originalGroupIndex = boardToShow.groups.findIndex(
        (g) => g.id === task.groupId
      );
      const prevTask = index > 0 ? tasksCopy[index - 1] : null;
      const nextTask =
        index < tasksCopy.length - 1 ? tasksCopy[index + 1] : null;

      let targetGroupId = task.groupId;
      if (prevTask && prevTask.groupId !== task.groupId) {
        targetGroupId = prevTask.groupId;
      } else if (nextTask && nextTask.groupId !== task.groupId) {
        targetGroupId = nextTask.groupId;
      }

      const groupIndex = updatedGroups.findIndex((g) => g.id === targetGroupId);
      if (groupIndex === -1) {
        // Fallback to original group if target not found
        updatedGroups[originalGroupIndex].tasks.push({
          ...task,
          groupId: undefined,
          groupTitle: undefined,
        });
      } else {
        updatedGroups[groupIndex].tasks.push({
          ...task,
          groupId: undefined,
          groupTitle: undefined,
        });
      }
    });

    const updatedBoard = { ...boardToShow, groups: updatedGroups };
    dispatch(updateBoard(updatedBoard));
  };

  // Handle task title edit
  const handleTitleBlur = (e, taskId) => {
    const newTitle = e.target.innerText;
    const updatedGroups = boardToShow.groups.map((group) => ({
      ...group,
      tasks: group.tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      ),
    }));
    const updatedBoard = { ...boardToShow, groups: updatedGroups };
    dispatch(updateBoard(updatedBoard));
  };

  // Handle group title edit
  const handleGroupTitleBlur = (e, groupId) => {
    const newTitle = e.target.innerText;
    const updatedGroups = boardToShow.groups.map((group) =>
      group.id === groupId ? { ...group, title: newTitle } : group
    );
    const updatedBoard = { ...boardToShow, groups: updatedGroups };
    dispatch(updateBoard(updatedBoard));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="table-scroll-container">
        <div className="group-table">
          <div className="table-header first-row">
            <div className="col-1">Card</div>
            <div className="col-2-group-title">List</div>
            <div className="col-3-labels">Labels</div>
            <div className="col-4-members">Members</div>
            <div className="col-5-due-date">Due date</div>
          </div>
          <Droppable droppableId="group-table">
            {(provided) => (
              <div
                className="table-body"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {flatTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="table-row board-table"
                      >
                        <div className="col-1">
                          <div className="status-indicator">
                            {task.status === "done" && (
                              <svg
                                width="16px"
                                height="16px"
                                fill="none"
                                viewBox="0 0 16 16"
                                role="presentation"
                                className="check-icon"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m12.326-2.52-1.152-.96L6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            )}
                            {task.status !== "done" && (
                              <div className="task-checkbox-table"></div>
                            )}
                          </div>
                          <span
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleTitleBlur(e, task.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                e.target.blur();
                              }
                            }}
                            className="span-task-title"
                          >
                            {task.title}
                          </span>
                        </div>
                        <div className="col-2-group-title">
                          <span
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleGroupTitleBlur(e, task.groupId)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                e.target.blur();
                              }
                            }}
                          >
                            {task.groupTitle}
                          </span>
                        </div>
                        <div className="col-3-labels">
                          <div className="labels labels-table">
                            {task.labels.map((label) => (
                              <div
                                key={label.id}
                                className="task-label tooltip"
                                style={{ backgroundColor: label.color || "" }}
                                data-tip={label.title}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="col-4-members">
                          <div className="task-users">
                            {task.members?.length > 0 && (
                              <div className="task-user-icons task-user-icon">
                                {task.members.map((member) => {
                                  if (member?.imgUrl) {
                                    return (
                                      <div
                                        className="user-circle task-user-icon"
                                        key={member.id}
                                        style={{
                                          backgroundImage: `url(${member.imgUrl})`,
                                        }}
                                      ></div>
                                    );
                                  } else {
                                    const initials =
                                      member?.fullname?.split(" ");
                                    return (
                                      <div
                                        key={member.id}
                                        className="member-circle task-user-icon"
                                      >
                                        {initials?.[0]?.[0].toUpperCase() || ""}
                                        {initials?.[1]?.[0].toUpperCase() || ""}
                                      </div>
                                    );
                                  }
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-5-due-date">
                          {task.dueDate && (
                            <div className="task-date tooltip" data-tip="Due date">
                              <i className="fa-regular fa-clock"></i>{" "}
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          )}
                          {!task.dueDate && (
                            <div className="task-date tooltip" data-tip="Due date">
                              .
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}