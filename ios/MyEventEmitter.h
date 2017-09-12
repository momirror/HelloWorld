//
//  MyEventEmitter.h
//  HelloWorld
//
//  Created by Spencer Mo on 9/7/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#define RNIOSExportJsToReact(noti) [[NSNotificationCenter defaultCenter] postNotificationName:@"event-emitted" object:noti];
@interface MyEventEmitter : RCTEventEmitter<RCTBridgeModule>
+ (void)emitEventWithName:(NSString *)name andPayload:(NSDictionary *)payload;
@end
