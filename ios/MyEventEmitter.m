//
//  MyEventEmitter.m
//  HelloWorld
//
//  Created by Spencer Mo on 9/7/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "MyEventEmitter.h"

@implementation MyEventEmitter

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)startObserving
{
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(emitEventInternal:)
                                               name:@"event-emitted"
                                             object:nil];
}
- (void)stopObserving
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)emitEventInternal:(NSNotification *)notification
{
  [self sendEventWithName:@"EventReminder"
                     body:@{@"name":@"hi,React native, I'm OC, I call you myself"}];
}

+ (void)emitEventWithName:(NSString *)name andPayload:(NSDictionary *)payload
{
  [[NSNotificationCenter defaultCenter] postNotificationName:@"event-emitted"
                                                      object:payload
                                                    userInfo:payload];
}




@end
