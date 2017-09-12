//
//  ContactsService.m
//  HelloWorld
//
//  Created by Spencer Mo on 9/7/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "ContactsService.h"
#import "MyEventEmitter.h"

@implementation ContactsService

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(addEvent:(NSString*)name location:(NSString*)location ){
//  RCTLog(@"name + location:%@,%@",name,location);
}

RCT_EXPORT_METHOD(sayHello:(NSString*)name) {
//  RCTLog(@"Hello, %@",name);
  

}

RCT_EXPORT_METHOD(sayHello2:(NSString*)name a:(NSString*)a b:(NSString*)b c:(NSString*)c) {
//  RCTLog(@"Hello, %@ %@ %@ %@",name,a,b,c);
}

RCT_EXPORT_METHOD(addEvent2:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)
{
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  
  [MyEventEmitter emitEventWithName:@"" andPayload:@{@"name":@"xiyun"}];
}



RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback){
  callback(@[[NSNull null],@"hey,js"]);
}













@end
