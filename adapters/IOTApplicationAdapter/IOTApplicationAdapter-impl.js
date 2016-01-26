/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

//iot device path
var iotpath = 'api/v0002/device/types/Android/devices/pm-x1234/location';

function addEvent(entry){

	var entry = {
			  "longitude": 60,
			  "latitude": 70,
			  "elevation": 50,
			  "accuracy": 5
			};
	
	var input = {
		    method : 'get',
		    returnedContentType : 'text/html',
		    path : iotpath
		};

	var response = WL.Server.invokeHttp(input);
	if(!response.id){
		response.isSuccessful = false;
	}
	return response;

}

