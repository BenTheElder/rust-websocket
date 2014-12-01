var searchIndex = {};
searchIndex['websocket'] = {"items":[[0,"","websocket","Rust-WebSocket is a WebSocket (RFC6455) library written in Rust.\n Rust-WebSocket attempts to provide a framework for WebSocket connections (both clients and servers).\n The library is currently in an experimental state, but can work as a simple WebSocket server or client,\n with the capability to send and receive fragmented messages.\n \n Rust-WebSocket does not provide a 'listener' object, since the WebSocket protocol utilises a TcpStream.\n To implement a WebSocket server, use a normal TcpListener, and the WebSocketClient::from_stream() function\n on an accepted stream. You will then need to read the handshake from the client and send a response.\n \n ```no_run\n use std::io::TcpListener;\n use std::io::{Listener, Acceptor};\n use websocket::WebSocketClient;\n use websocket::handshake::WebSocketResponse;\n \n let listener = TcpListener::bind(\"127.0.0.1:1234\");\n let mut acceptor = listener.listen();\n \n for stream in acceptor.incoming() {\n \tmatch stream {\n \t\tOk(stream) => {\n \t\t\t// Spawn a new task for each connection to run in parallel\n \t\t\tspawn(proc() {\n \t\t\t\t// Get a WebSocketClient from this stream\n \t\t\t\t// The mask argument is false as messages sent by the server are always unmasked\n \t\t\t\tlet mut client = WebSocketClient::from_stream(stream, false); \n \t\t\t\t\n \t\t\t\t// Read the handshake from the client\n \t\t\t\tlet request = client.receive_handshake_request().unwrap();\n \t\t\t\t\n \t\t\t\t// Get the headers we need to respond\n \t\t\t\tlet key = request.key().unwrap();\n \t\t\t\t\n \t\t\t\t// Form a response from the key\n\t\t\t\t\t// In this example, we don't deal with the requested protocol\n \t\t\t\tlet response = WebSocketResponse::new(key.as_slice(), None);\n \t\t\t\t\n \t\t\t\t// Send the response to the client\n \t\t\t\tlet _ = client.send_handshake_response(response);\n \t\t\t\t\n \t\t\t\t// Now we can send and receive messages\n \t\t\t\tlet receiver = client.receiver();\n \t\t\t\tlet mut sender = client.sender();\n \t\t\t\t\n \t\t\t\t// ...\n \t\t\t});\n \t\t}\n \t\t_ => { /* A connection error occurred */ }\n \t}\n }\n ```"],[1,"WebSocketClient","","Represents a WebSocket client.\nTo use WebSocketClient, you must create one using either WebSocketClient::connect(),\nwhich is used for writing clients, or WebSocketClient::from_stream(), which creates\na WebSocketClient from a TcpStream (typically used in a server)."],[0,"headers","","Structs for manipulation of HTTP headers"],[1,"HeaderCollection","websocket::headers","Represents a collection of HTTP headers"],[1,"Headers","","Iterates over the headers present in a HeaderCollection"],[10,"utf8","url::encoding","",0],[10,"lookup","","",0],[10,"is_utf8","","",0],[10,"decode","","",0],[10,"encode","","",0],[10,"clone","url::host","",1],[10,"clone_from","","",1],[10,"assert_receiver_is_total_eq","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"ne","","",1],[10,"clone","","",2],[10,"clone_from","","",2],[10,"assert_receiver_is_total_eq","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"parse","","Parse a host: either an IPv6 address in [] square brackets, or a domain.",1],[10,"serialize","","Serialize the host as a string.",1],[10,"fmt","","",1],[10,"parse","","Parse an IPv6 address, without the [] square brackets.",2],[10,"serialize","","Serialize the IPv6 address to a string.",2],[10,"fmt","","",2],[10,"clone","url::parser","",3],[10,"clone_from","","",3],[10,"assert_receiver_is_total_eq","","",3],[10,"eq","","",3],[10,"ne","","",3],[10,"ne","","",3],[10,"description","","",3],[10,"detail","","",3],[10,"cause","","",3],[10,"fmt","","",3],[10,"assert_receiver_is_total_eq","","",4],[10,"eq","","",4],[10,"ne","","",4],[10,"ne","","",4],[10,"next","","",5],[10,"size_hint","","",5],[10,"chain","","",5],[10,"zip","","",5],[10,"map","","",5],[10,"filter","","",5],[10,"filter_map","","",5],[10,"enumerate","","",5],[10,"peekable","","",5],[10,"skip_while","","",5],[10,"take_while","","",5],[10,"skip","","",5],[10,"take","","",5],[10,"scan","","",5],[10,"flat_map","","",5],[10,"fuse","","",5],[10,"inspect","","",5],[10,"by_ref","","",5],[10,"collect","","",5],[10,"nth","","",5],[10,"last","","",5],[10,"fold","","",5],[10,"count","","",5],[10,"all","","",5],[10,"any","","",5],[10,"find","","",5],[10,"position","","",5],[10,"max_by","","",5],[10,"min_by","","",5],[10,"fmt","url::format","",6],[10,"fmt","","",7],[10,"fmt","","",8],[10,"clone","url","",9],[10,"clone_from","","",9],[10,"assert_receiver_is_total_eq","","",9],[10,"eq","","",9],[10,"ne","","",9],[10,"ne","","",9],[10,"clone","","",10],[10,"clone_from","","",10],[10,"assert_receiver_is_total_eq","","",10],[10,"eq","","",10],[10,"ne","","",10],[10,"ne","","",10],[10,"clone","","",11],[10,"clone_from","","",11],[10,"assert_receiver_is_total_eq","","",11],[10,"eq","","",11],[10,"ne","","",11],[10,"ne","","",11],[10,"hash","","",9],[10,"new","","Return a new UrlParser with default parameters.",12],[10,"base_url","","Set the base URL used for resolving relative URL references, and return the `UrlParser`.\nThe default is no base URL, so that relative URLs references fail to parse.",12],[10,"error_handler","","Set an error handler for non-fatal parse errors, and return the `UrlParser`.",12],[10,"scheme_type_mapper","","Set a *scheme type mapper*, and return the `UrlParser`.",12],[10,"parse","","Parse `input` as an URL, with all the parameters previously set in the `UrlParser`.",12],[10,"parse_path","","Parse `input` as a “standalone” URL path,\nwith an optional query string and fragment identifier.",12],[10,"assert_receiver_is_total_eq","","",13],[10,"eq","","",13],[10,"ne","","",13],[10,"ne","","",13],[10,"default_port","","",13],[10,"parse","","Parse an URL with the default `UrlParser` parameters.",9],[10,"from_file_path","","Convert a file name as `std::path::Path` into an URL in the `file` scheme.",9],[10,"from_directory_path","","Convert a directory name as `std::path::Path` into an URL in the `file` scheme.",9],[10,"to_file_path","","Assuming the URL is in the `file` scheme or similar,\nconvert its path to an absolute `std::path::Path`.",9],[10,"serialize","","Return the serialization of this URL as a string.",9],[10,"serialize_no_fragment","","Return the serialization of this URL, without the fragment identifier, as a string",9],[10,"non_relative_scheme_data","","If the URL is *non-relative*, return the string scheme data.",9],[10,"non_relative_scheme_data_mut","","If the URL is *non-relative*, return a mutable reference to the string scheme data.",9],[10,"relative_scheme_data","","If the URL is in a *relative scheme*, return the structured scheme data.",9],[10,"relative_scheme_data_mut","","If the URL is in a *relative scheme*,\nreturn a mutable reference to the structured scheme data.",9],[10,"username","","If the URL is in a *relative scheme*, return its username.",9],[10,"username_mut","","If the URL is in a *relative scheme*, return a mutable reference to its username.",9],[10,"lossy_percent_decode_username","","Percent-decode the URL’s username, if any.",9],[10,"password","","If the URL is in a *relative scheme*, return its password, if any.",9],[10,"password_mut","","If the URL is in a *relative scheme*, return a mutable reference to its password, if any.",9],[10,"lossy_percent_decode_password","","Percent-decode the URL’s password, if any.",9],[10,"serialize_userinfo","","Serialize the URL's username and password, if any.",9],[10,"host","","If the URL is in a *relative scheme*, return its structured host.",9],[10,"host_mut","","If the URL is in a *relative scheme*, return a mutable reference to its structured host.",9],[10,"domain","","If the URL is in a *relative scheme* and its host is a domain,\nreturn the domain as a string.",9],[10,"domain_mut","","If the URL is in a *relative scheme* and its host is a domain,\nreturn a mutable reference to the domain string.",9],[10,"serialize_host","","If the URL is in a *relative scheme*, serialize its host as a string.",9],[10,"port","","If the URL is in a *relative scheme* and has a port number, return it.",9],[10,"port_mut","","If the URL is in a *relative scheme*, return a mutable reference to its port.",9],[10,"port_or_default","","If the URL is in a *relative scheme* that is not a file-like,\nreturn its port number, even if it is the default.",9],[10,"path","","If the URL is in a *relative scheme*, return its path components.",9],[10,"path_mut","","If the URL is in a *relative scheme*, return a mutable reference to its path components.",9],[10,"serialize_path","","If the URL is in a *relative scheme*, serialize its path as a string.",9],[10,"query_pairs","","Parse the URL’s query string, if any, as `application/x-www-form-urlencoded`\nand return a vector of (key, value) pairs.",9],[10,"set_query_from_pairs","","Serialize an iterator of (key, value) pairs as `application/x-www-form-urlencoded`\nand set it as the URL’s query string.",9],[10,"lossy_percent_decode_query","","Percent-decode the URL’s query string, if any.",9],[10,"lossy_percent_decode_fragment","","Percent-decode the URL’s fragment identifier, if any.",9],[10,"encode","","",9],[10,"decode","","",9],[10,"fmt","","",9],[10,"fmt","","",10],[10,"lossy_percent_decode_username","","Percent-decode the URL’s username.",11],[10,"lossy_percent_decode_password","","Percent-decode the URL’s password, if any.",11],[10,"to_file_path","","Assuming the URL is in the `file` scheme or similar,\nconvert its path to an absolute `std::path::Path`.",11],[10,"domain","","If the host is a domain, return the domain as a string.",11],[10,"domain_mut","","If the host is a domain, return a mutable reference to the domain string.",11],[10,"port_or_default","","Return the port number of the URL, even if it is the default.\nReturn `None` for file-like URLs.",11],[10,"serialize_path","","Serialize the path as a string.",11],[10,"serialize_userinfo","","Serialize the userinfo as a string.",11],[10,"fmt","","",11],[10,"to_url_path","std::path::posix","",14],[10,"to_url_path","std::path::windows","",15],[10,"from_url_path","std::path::posix","",14],[10,"from_url_path","std::path::windows","",15],[4,"ParseResult","websocket::headers",""],[2,"ParseError","","Errors that can occur during parsing."],[12,"EmptyHost","","",3],[12,"InvalidScheme","","",3],[12,"InvalidPort","","",3],[12,"InvalidIpv6Address","","",3],[12,"InvalidDomainCharacter","","",3],[12,"InvalidCharacter","","",3],[12,"InvalidBackslash","","",3],[12,"InvalidPercentEncoded","","",3],[12,"InvalidAtSymbolInUser","","",3],[12,"ExpectedTwoSlashes","","",3],[12,"ExpectedInitialSlash","","",3],[12,"NonUrlCodePoint","","",3],[12,"RelativeUrlWithScheme","","",3],[12,"RelativeUrlWithoutBase","","",3],[12,"RelativeUrlWithNonRelativeBase","","",3],[12,"NonAsciiDomainsNotSupportedYet","","",3],[12,"CannotSetJavascriptFragment","","",3],[12,"CannotSetPortWithFileLikeScheme","","",3],[12,"CannotSetUsernameWithNonRelativeScheme","","",3],[12,"CannotSetPasswordWithNonRelativeScheme","","",3],[12,"CannotSetHostPortWithNonRelativeScheme","","",3],[12,"CannotSetHostWithNonRelativeScheme","","",3],[12,"CannotSetPortWithNonRelativeScheme","","",3],[12,"CannotSetPathWithNonRelativeScheme","","",3],[0,"handshake","websocket","Structs for WebSocket handshake requests and responses"],[1,"WebSocketRequest","websocket::handshake","Represents a WebSocket handshake request, which is sent from the client to the server.\nUse the new() function to create a new request, and send it with the WebSocketClient::connect() function."],[11,"resource_name","","The resource name of the request. E.g. /path/to/resource for the URI ws://www.example.com/path/to/resource",16],[11,"http_version","","The HTTP version of this request",16],[11,"headers","","The collection of headers contained in this request",16],[1,"WebSocketResponse","","Represents a WebSocket response from a server"],[11,"http_version","","The HTTP version of this request",17],[11,"status_code","","The status code of the response (for a successful handshake, this should be 101)",17],[11,"reason_phrase","","The human readable reason phrase for the status code (E.g. Switching Protocols)",17],[11,"headers","","The collection of headers contained in this WebSocket response",17],[0,"message","websocket","Structs for WebSocket messages and the transmission of messages"],[1,"WebSocketSender","websocket::message","Represents a WebSocket sender, capable of transmitting data to the remote endpoint.\nUse the send_message() method to send a single, whole message. If you need to send\na series of message fragments (e.g. if you need to send a message of unknown length),\nuse the fragment() method to obtain a WebSocketFragmentSerializer, which can be\nused to do so.\n \n```no_run\nuse websocket::message::WebSocketMessage;\n# use websocket::WebSocketClient;\n# use websocket::handshake::WebSocketRequest;\n# #[allow(unused_must_use)]\n# fn foo() {\n# let request = WebSocketRequest::new(\"ws://127.0.0.1:1234\", \"None\").unwrap();\n# let mut client = WebSocketClient::connect(&request).unwrap();\n \nlet mut sender = client.sender(); // Get a sender\nlet data = \"My fancy message\".to_string();\nlet message = WebSocketMessage::Text(data.to_string());\n \nlet _ = sender.send_message(&message); // Send the message\n# }\n```"],[1,"WebSocketFragmentSerializer","","Allows for the serialization of message fragments, to be sent to the remote endpoint.\nAny number of messages can be sent (but only text or binary messages, as control\nmessages can never be fragmented) using the send_fragment() method, and when the final\nfragment is to be sent, use the finish() method. After calling the finish method, the\nremote endpoint will assemble all of the received message fragments into a single\nmessage containing all of the fragment data concatenated together.\n \n```no_run\nuse websocket::message::WebSocketMessage;\n# use websocket::WebSocketClient;\n# use websocket::handshake::WebSocketRequest;\n# #[allow(unused_must_use)]\n# fn foo() {\n# let request = WebSocketRequest::new(\"ws://127.0.0.1:1234\", \"None\").unwrap();\n# let mut client = WebSocketClient::connect(&request).unwrap();\n# let mut sender = client.sender();\n// Get a WebSocketFragmentSerializer\nlet mut fragment = sender.fragment();\n \nlet message1 = WebSocketMessage::Text(\"This \".to_string());\nlet message2 = WebSocketMessage::Text(\"is \".to_string());\nlet message3 = WebSocketMessage::Text(\"a \".to_string());\nlet message4 = WebSocketMessage::Text(\"fragmented \".to_string());\nlet message5 = WebSocketMessage::Text(\"message.\".to_string());\n \n// Send our fragments\nfragment.send_fragment(&message1); // Each one is sent immediately\nfragment.send_fragment(&message2);\nfragment.send_fragment(&message3);\nfragment.send_fragment(&message4);\n \n// Now tell them we're done\nfragment.finish(&message1); // Now they'll assemble the fragments into a single message\n \n// Drop this WebSocketFragmentSerializer, or let it go out of scope\ndrop(fragment);\n# }\n```"],[1,"WebSocketReceiver","","Represents a WebSocket receiver which can receive data from the remote endpoint.\nAll methods are task blocking (but not stream blocking, so you can send and receive concurrently).\nA WebSocketReceiver can be captured into another task for concurrency"],[1,"IncomingMessages","","An iterator over incoming messages. Blocks the task and always returns Some."],[2,"WebSocketMessage","","Represents a WebSocket message. When receiving messages, the resulting\nmessages are always entire messages (never fragments). You are able to, \nhowever, send messages as fragments using a WebSocketFragmentSerializer. \nThese messages will be sent to the remote endpoint and reassembled into\na single message."],[12,"Text","","A message containing UTF-8 text data",18],[12,"Binary","","A message containing binary data",18],[12,"Close","","A message which indicates closure of the WebSocket connection.\nThis message may or may not contain data",18],[12,"Ping","","A ping message - should be responded to with a pong message.\nUsually the pong message will be sent with the same data as the\nreceived ping message.",18],[12,"Pong","","A pong message",18],[10,"new","websocket::headers","Creates a new HeaderCollection",19],[10,"insert","","Add the given field-value pair to the collection. If the field is already present,\nthe value is appended to the header using comma-separation. Field names are case-insensitive.",19],[10,"contains_field","","Returns true when the specified case-insensitive field name exists in the HeaderCollection.",19],[10,"get","","Gets the value of the header with the specified case-insensitive field name.",19],[10,"remove","","Removes the header with the specified field name from the HeaderCollection.",19],[10,"iter","","Returns an iterator which iterates over each header in the HeaderCollection.",19],[10,"clone","","",19],[10,"next","","",20],[10,"new","websocket::handshake","Creates a new WebSocket handshake request for use with WebSocketClient::connect().",16],[10,"host","","Short-cut to get the Host field value of this request",16],[10,"connection","","Short-cut to get the Connection field value of this request",16],[10,"upgrade","","Short-cut to get the Upgrade field value of this request",16],[10,"version","","Short-cut to get the Sec-WebSocket-Version field value of this request",16],[10,"key","","Short-cut to get the Sec-WebSocket-Key field value of this request",16],[10,"protocol","","Short-cut to get the Sec-WebSocket-Protocol field value of this request",16],[10,"extensions","","Short-cut to get the Sec-WebSocket-Extensions field value of this request",16],[10,"origin","","Short-cut to get the Origin field value of this request",16],[10,"clone","","",16],[10,"new","","Create a new WebSocket response based on the base-64 encoded key from a client.",17],[10,"upgrade","","Short-cut to get the Upgrade field value of this request",17],[10,"connection","","Short-cut to get the Connection field value of this request",17],[10,"accept","","Short-cut to get the Sec-WebSocket-Accept field value of this request",17],[10,"protocol","","Short-cut to get the Sec-WebSocket-Protocol field value of this request",17],[10,"version","","Short-cut to get the Sec-WebSocket-Version field value of this request",17],[10,"extensions","","Short-cut to get the Sec-WebSocket-Extensions field value of this request",17],[10,"gen_accept","","Generates the handshake Sec-WebSocket-Accept value from\nthe given Sec-WebSocket-Key.",17],[10,"is_successful","","Returns true if this response indicates a successful handshake\n \nThe status code must be 101, the WebSocket-Version must be 13,\nthe Upgrade must be 'websocket', the Connection must be 'Upgrade',\nthe Sec-WebSocket-Accept header must match the expected value from\nthe given key.",17],[10,"clone","","",17],[10,"connect","websocket","Connect to the WebSocket server using the given request. Use WebSocketRequest::new() to create a request for use\nwith this function.",21],[10,"from_stream","","Creates a new WebSocketClient from a given TcpStream.\nThe mask parameter determines whether or not messages send to the remote endpoint will be masked.\nIf the client is connecting to a remote endpoint, set mask to true. If the client is the remote\nendpoint (and therefore, the server is the local endpoint), set mask to false.",21],[10,"stream","","Returns a copy of the underlying TcpStream for this WebSocketClient.",21],[10,"peer_name","","Returns the socket address of the remote peer of this TCP connection.",21],[10,"socket_name","","Returns the socket address of the local half of this TCP connection.",21],[10,"receive_handshake_request","","Reads a request from this client. Only to be used if the server is the local endpoint and\nthe client is the remote endpoint.",21],[10,"receive_handshake_response","","Reads a response that was sent to this client. Only to be used if the server is the remote\nendpoint and the client is the local endpoint.",21],[10,"send_handshake_response","","Sends the specified WebSocketResponse to this client. Only to be used if the server is\nthe local endpoint and the client is the remote endpoint.",21],[10,"sender","","Returns a WebSocketSender from this client. Used to transmit data to the remote endpoint,\nthat is, to the server if WebSocketClient::connect() has been used, or to this client otherwise.",21],[10,"close_send","","Closes the sender for this WebSocketClient.\nThis method will close the message sending portion of this client, causing all pending and future sends to immediately return with an error.\nThis affects all WebSocketSenders for the client, and any copies of the underlying stream will be unable to write.",21],[10,"receiver","","Returns a WebSocketReceiver from this client. Used to receive data from the remote endpoint,\nthat is, from the server if WebSocketClient::connect() has been used, or from this client otherwise.",21],[10,"close_receive","","Closes the receiver for this WebSocketClient.\nThis method will close the message receiving portion of this client, causing all pending and future receives to immediately return with an error.\nThis affects all WebSocketReceivers for the client, and any copies of the underlying stream will be unable to read.",21],[10,"clone","","",21],[10,"send_message","websocket::message","Sends a message to the remote endpoint.",22],[10,"fragment","","Returns a fragment serializer, able to send fragments of a message to the remote endpoint.",22],[10,"send_fragment","","Send a fragment of a message - if the message is finished, use the WebSocketFragmentSerializer::finish() function.\nCan only be used with a Text or Binary message.",23],[10,"finish","","Send the final message and tell the remote endpoint the message is complete. Can be used with an empty message if necessary.\nCan only be used with a Text or Binary message.\n \nOnce this has been called, you can send a new fragmented message using the send_fragment() method.",23],[10,"receive_message","","Wait for and accept a message (subjected to the underlying stream timeout).\nIf the received message is fragmented, this function will not return\nuntil the final fragment has been received.\nIf a control frame is received interleaved within a fragmented message,\nThe control frame will be returned first, and the message will be returned\non the next call to the function (or later if more control frames are received).",24],[10,"incoming","","Returns an iterator over the incoming messages for/from this client",24],[10,"next","","",25],[10,"fmt","","",18],[10,"new","websocket::handshake","Creates a new WebSocket handshake request for use with WebSocketClient::connect().",16],[10,"host","","Short-cut to get the Host field value of this request",16],[10,"connection","","Short-cut to get the Connection field value of this request",16],[10,"upgrade","","Short-cut to get the Upgrade field value of this request",16],[10,"version","","Short-cut to get the Sec-WebSocket-Version field value of this request",16],[10,"key","","Short-cut to get the Sec-WebSocket-Key field value of this request",16],[10,"protocol","","Short-cut to get the Sec-WebSocket-Protocol field value of this request",16],[10,"extensions","","Short-cut to get the Sec-WebSocket-Extensions field value of this request",16],[10,"origin","","Short-cut to get the Origin field value of this request",16],[10,"clone","","",16],[10,"new","","Create a new WebSocket response based on the base-64 encoded key from a client.",17],[10,"upgrade","","Short-cut to get the Upgrade field value of this request",17],[10,"connection","","Short-cut to get the Connection field value of this request",17],[10,"accept","","Short-cut to get the Sec-WebSocket-Accept field value of this request",17],[10,"protocol","","Short-cut to get the Sec-WebSocket-Protocol field value of this request",17],[10,"version","","Short-cut to get the Sec-WebSocket-Version field value of this request",17],[10,"extensions","","Short-cut to get the Sec-WebSocket-Extensions field value of this request",17],[10,"gen_accept","","Generates the handshake Sec-WebSocket-Accept value from\nthe given Sec-WebSocket-Key.",17],[10,"is_successful","","Returns true if this response indicates a successful handshake\n \nThe status code must be 101, the WebSocket-Version must be 13,\nthe Upgrade must be 'websocket', the Connection must be 'Upgrade',\nthe Sec-WebSocket-Accept header must match the expected value from\nthe given key.",17],[10,"clone","","",17],[10,"connect","websocket","Connect to the WebSocket server using the given request. Use WebSocketRequest::new() to create a request for use\nwith this function.",21],[10,"from_stream","","Creates a new WebSocketClient from a given TcpStream.\nThe mask parameter determines whether or not messages send to the remote endpoint will be masked.\nIf the client is connecting to a remote endpoint, set mask to true. If the client is the remote\nendpoint (and therefore, the server is the local endpoint), set mask to false.",21],[10,"stream","","Returns a copy of the underlying TcpStream for this WebSocketClient.",21],[10,"peer_name","","Returns the socket address of the remote peer of this TCP connection.",21],[10,"socket_name","","Returns the socket address of the local half of this TCP connection.",21],[10,"receive_handshake_request","","Reads a request from this client. Only to be used if the server is the local endpoint and\nthe client is the remote endpoint.",21],[10,"receive_handshake_response","","Reads a response that was sent to this client. Only to be used if the server is the remote\nendpoint and the client is the local endpoint.",21],[10,"send_handshake_response","","Sends the specified WebSocketResponse to this client. Only to be used if the server is\nthe local endpoint and the client is the remote endpoint.",21],[10,"sender","","Returns a WebSocketSender from this client. Used to transmit data to the remote endpoint,\nthat is, to the server if WebSocketClient::connect() has been used, or to this client otherwise.",21],[10,"close_send","","Closes the sender for this WebSocketClient.\nThis method will close the message sending portion of this client, causing all pending and future sends to immediately return with an error.\nThis affects all WebSocketSenders for the client, and any copies of the underlying stream will be unable to write.",21],[10,"receiver","","Returns a WebSocketReceiver from this client. Used to receive data from the remote endpoint,\nthat is, from the server if WebSocketClient::connect() has been used, or from this client otherwise.",21],[10,"close_receive","","Closes the receiver for this WebSocketClient.\nThis method will close the message receiving portion of this client, causing all pending and future receives to immediately return with an error.\nThis affects all WebSocketReceivers for the client, and any copies of the underlying stream will be unable to read.",21],[10,"clone","","",21],[10,"new","websocket::headers","Creates a new HeaderCollection",19],[10,"insert","","Add the given field-value pair to the collection. If the field is already present,\nthe value is appended to the header using comma-separation. Field names are case-insensitive.",19],[10,"contains_field","","Returns true when the specified case-insensitive field name exists in the HeaderCollection.",19],[10,"get","","Gets the value of the header with the specified case-insensitive field name.",19],[10,"remove","","Removes the header with the specified field name from the HeaderCollection.",19],[10,"iter","","Returns an iterator which iterates over each header in the HeaderCollection.",19],[10,"clone","","",19],[10,"next","","",20]],"paths":[[1,"EncodingOverride"],[2,"Host"],[1,"Ipv6Address"],[2,"ParseError"],[2,"Context"],[1,"CharRanges"],[1,"PathFormatter"],[1,"UserInfoFormatter"],[1,"UrlNoFragmentFormatter"],[1,"Url"],[2,"SchemeData"],[1,"RelativeSchemeData"],[1,"UrlParser"],[2,"SchemeType"],[1,"Path"],[1,"Path"],[1,"WebSocketRequest"],[1,"WebSocketResponse"],[2,"WebSocketMessage"],[1,"HeaderCollection"],[1,"Headers"],[1,"WebSocketClient"],[1,"WebSocketSender"],[1,"WebSocketFragmentSerializer"],[1,"WebSocketReceiver"],[1,"IncomingMessages"]]};
initSearch(searchIndex);
