declare module "mxgraphAllClasses" {
	
/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxSelectionCellsHandler
 * 
 * An event handler that manages cell handlers and invokes their mouse event
 * processing functions.
 * 
 * Group: Events
 * 
 * Event: mxEvent.ADD
 * 
 * Fires if a cell has been added to the selection. The <code>state</code>
 * property contains the <mxCellState> that has been added.
 * 
 * Event: mxEvent.REMOVE
 * 
 * Fires if a cell has been remove from the selection. The <code>state</code>
 * property contains the <mxCellState> that has been removed.
 * 
 * Parameters:
 * 
 * graph - Reference to the enclosing <mxGraph>.
 */
export class mxSelectionCellsHandler extends mxEventSource {
	constructor(graph: mxGraph);
// {
// 	mxEventSource.call(this);
	
// 	this.graph = graph;
// 	this.handlers = new mxDictionary();
// 	this.graph.addMouseListener(this);
	
// 	this.refreshHandler = mxUtils.bind(this, function(sender, evt)
// 	{
// 		if (this.isEnabled())
// 		{
// 			this.refresh();
// 		}
// 	});
	
// 	this.graph.getSelectionModel().addListener(mxEvent.CHANGE, this.refreshHandler);
// 	this.graph.getModel().addListener(mxEvent.CHANGE, this.refreshHandler);
// 	this.graph.getView().addListener(mxEvent.SCALE, this.refreshHandler);
// 	this.graph.getView().addListener(mxEvent.TRANSLATE, this.refreshHandler);
// 	this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.refreshHandler);
// 	this.graph.getView().addListener(mxEvent.DOWN, this.refreshHandler);
// 	this.graph.getView().addListener(mxEvent.UP, this.refreshHandler);
// };

/**
 * Extends mxEventSource.
 */
// mxUtils.extend(mxSelectionCellsHandler, mxEventSource);

/**
 * Variable: graph
 * 
 * Reference to the enclosing <mxGraph>.
 */
graph: mxGraph; //null

/**
 * Variable: enabled
 * 
 * Specifies if events are handled. Default is true.
 */
enabled: boolean; //true

/**
 * Variable: refreshHandler
 * 
 * Keeps a reference to an event listener for later removal.
 */
refreshHandler; //null

/**
 * Variable: maxHandlers
 * 
 * Defines the maximum number of handlers to paint individually. Default is 100.
 */
maxHandlers: number; //100

/**
 * Variable: handlers
 * 
 * <mxDictionary> that maps from cells to handlers.
 */
handlers: mxDictionary; //null

/**
 * Function: isEnabled
 * 
 * Returns <enabled>.
 */
isEnabled(): boolean;
// {
// 	return this.enabled;
// };

/**
 * Function: setEnabled
 * 
 * Sets <enabled>.
 */
setEnabled(value): void;
// {
// 	this.enabled = value;
// };

/**
 * Function: getHandler
 * 
 * Returns the handler for the given cell.
 */
getHandler(cell: mxCell);
// {
// 	return this.handlers.get(cell);
// };

/**
 * Function: reset
 * 
 * Resets all handlers.
 */
reset(): void;
// {
// 	this.handlers.visit(function(key, handler)
// 	{
// 		handler.reset.apply(handler);
// 	});
// };

/**
 * Function: refresh
 * 
 * Reloads or updates all handlers.
 */
refresh(): void;
// {
// 	// Removes all existing handlers
// 	var oldHandlers = this.handlers;
// 	this.handlers = new mxDictionary();
	
// 	// Creates handles for all selection cells
// 	var tmp = this.graph.getSelectionCells();

// 	for (var i = 0; i < tmp.length; i++)
// 	{
// 		var state = this.graph.view.getState(tmp[i]);

// 		if (state != null)
// 		{
// 			var handler = oldHandlers.remove(tmp[i]);

// 			if (handler != null)
// 			{
// 				if (handler.state != state)
// 				{
// 					handler.destroy();
// 					handler = null;
// 				}
// 				else
// 				{
// 					if (handler.refresh != null)
// 					{
// 						handler.refresh();
// 					}
					
// 					handler.redraw();
// 				}
// 			}
			
// 			if (handler == null)
// 			{
// 				handler = this.graph.createHandler(state);
// 				this.fireEvent(new mxEventObject(mxEvent.ADD, 'state', state));
// 			}
			
// 			if (handler != null)
// 			{
// 				this.handlers.put(tmp[i], handler);
// 			}
// 		}
// 	}
	
// 	// Destroys all unused handlers
// 	oldHandlers.visit(mxUtils.bind(this, function(key, handler)
// 	{
// 		this.fireEvent(new mxEventObject(mxEvent.REMOVE, 'state', handler.state));
// 		handler.destroy();
// 	}));
// };

/**
 * Function: updateHandler
 * 
 * Updates the handler for the given shape if one exists.
 */
updateHandler(state): void;
// {
// 	var handler = this.handlers.remove(state.cell);
	
// 	if (handler != null)
// 	{
// 		handler.destroy();
// 		handler = this.graph.createHandler(state);
		
// 		if (handler != null)
// 		{
// 			this.handlers.put(state.cell, handler);
// 		}
// 	}
// };

/**
 * Function: mouseDown
 * 
 * Redirects the given event to the handlers.
 */
mouseDown(sender, me): void;
// {
// 	if (this.graph.isEnabled() && this.isEnabled())
// 	{
// 		var args = [sender, me];

// 		this.handlers.visit(function(key, handler)
// 		{
// 			handler.mouseDown.apply(handler, args);
// 		});
// 	}
// };

/**
 * Function: mouseMove
 * 
 * Redirects the given event to the handlers.
 */
mouseMove(sender, me): void;
// {
// 	if (this.graph.isEnabled() && this.isEnabled())
// 	{
// 		var args = [sender, me];

// 		this.handlers.visit(function(key, handler)
// 		{
// 			handler.mouseMove.apply(handler, args);
// 		});
// 	}
// };

/**
 * Function: mouseUp
 * 
 * Redirects the given event to the handlers.
 */
mouseUp(sender, me): void;
// {
// 	if (this.graph.isEnabled() && this.isEnabled())
// 	{
// 		var args = [sender, me];

// 		this.handlers.visit(function(key, handler)
// 		{
// 			handler.mouseUp.apply(handler, args);
// 		});
// 	}
// };

/**
 * Function: destroy
 * 
 * Destroys the handler and all its resources and DOM nodes.
 */
destroy(): void;
// {
// 	this.graph.removeMouseListener(this);
	
// 	if (this.refreshHandler != null)
// 	{
// 		this.graph.getSelectionModel().removeListener(this.refreshHandler);
// 		this.graph.getModel().removeListener(this.refreshHandler);
// 		this.graph.getView().removeListener(this.refreshHandler);
// 		this.refreshHandler = null;
// 	}
// };
}
}